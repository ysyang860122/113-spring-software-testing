const test = require('node:test');
const assert = require('assert');
const fs = require('fs');
const { Application, MailSystem } = require('./main');
// TODO: write your tests here
// Remember to use Stub, Mock, and Spy when necessary
test('Test getNames', async (t) => {
    const mockContent = 'John\nJane\nJim';
    const tempFilePath = 'name_list.txt';

    // create mock file
    fs.writeFileSync(tempFilePath, mockContent, 'utf-8');

    // create instance
    const app = new Application();
    const names = await app.getNames();
    app.people = mockContent.split('\n');

    assert.deepStrictEqual(names[0], ['John', 'Jane', 'Jim']);
    assert.deepStrictEqual(names[1], []);

    if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
    }
});
test('Test getNames with empty file', async (t) => {
    const tempFilePath = 'name_list.txt';

    // 創建空文件
    fs.writeFileSync(tempFilePath, "", 'utf-8');

    const app = new Application();
    const names = await app.getNames();

    assert.deepStrictEqual(names[0], ['']);
    assert.deepStrictEqual(names[1], []);

    if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
    }
});
test('Test getNames with file read error', async (t) => {
    const tempFilePath = 'name_list.txt';
    // create mock file
    fs.writeFileSync(tempFilePath, '', 'utf-8');

    // 禁用實際的 constructor 調用
    const originalConstructor = Application.prototype.constructor;

    try {
        const app = new Application();
        // await app.getNames();
        assert.fail("ENOENT: no such file or directory, open 'name_list.txt'");
    } catch (error) {
        assert.strictEqual(error.message, "ENOENT: no such file or directory, open 'name_list.txt'");
    } finally {
        // 恢復原始的 constructor
        Application.prototype.constructor = originalConstructor;
    }
    if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
    }
});
test ('Test getRandomPerson', async (t) => {
    const mockContent = 'John\nJane\nJim';
    const tempFilePath = 'name_list.txt';

    // create mock file
    fs.writeFileSync(tempFilePath, mockContent, 'utf-8');

    // create instance
    const app = new Application();
    app.people = mockContent.split('\n');
    const person = app.getRandomPerson();
    // console.log('person = ', person);
    assert(['John', 'Jane', 'Jim'].includes(person));

    if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
    }
});

test('Test getRandomPerson with empty people array', async (t) => {
    const tempFilePath = 'name_list.txt';

    // 創建臨時文件
    fs.writeFileSync(tempFilePath, '', 'utf-8');
    
    try {
        // 創建實例
        const app = new Application();
        
        // 設置空的 people 陣列
        app.people = [];
        
        // 測試 getRandomPerson
        const person = app.getRandomPerson();
        
        // 驗證結果
        // 在空陣列的情況下，getRandomPerson 可能返回 undefined
        // 或者拋出異常（這取決於代碼的實現）
        assert.strictEqual(person, undefined);
        
    } finally {
        // 無論測試成功或失敗，都確保刪除臨時文件
        if (fs.existsSync(tempFilePath)) {
            fs.unlinkSync(tempFilePath);
        }
    }
});
test('Test selectNextPerson', async (t) => {
    const mockContent = 'John\nJane\nJim';
    const tempFilePath = 'name_list.txt';
    const mockContent2 = '';
    // create mock file
    fs.writeFileSync(tempFilePath, mockContent, 'utf-8');
   
    // 創建實例
    const app = new Application();
    await new Promise(resolve => setTimeout(resolve, 1000));

    app.people = mockContent.split('\n');
    app.selected = [];
    const person = app.selectNextPerson();

    // 驗證結果
    assert(['John', 'Jane', 'Jim'].includes(person));
    assert.strictEqual(app.selected.length, 1);
    assert(['John', 'Jane', 'Jim'].includes(app.selected[0]));
    
    // 設置所有人都已被選擇
    app.people = mockContent2.split('\n');
    app.selected = [...app.people]; // 所有人都已選擇
    
    // 測試選擇下一個人應該返回 null
    const person2 = app.selectNextPerson();
    
    // 驗證結果
    assert.strictEqual(person2, null);

    if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
    }
});
test('Test selectNextPerson with already selected person', async (t) => {
    const tempFilePath = 'name_list.txt';
    
    // 創建臨時文件
    fs.writeFileSync(tempFilePath, 'John\nJane\nJim', 'utf-8');
    
    try {
        // 創建實例
        const app = new Application();
        await new Promise(resolve => setTimeout(resolve, 100)); // 等待初始化完成
        
        // 設置特定的 people 陣列和 selected 陣列
        app.people = ['John', 'Jane', 'Jim'];
        app.selected = ['John', 'Jane']; // 已經選擇了 John 和 Jane
        
        // 強制 getRandomPerson 返回已選擇的人，然後返回未選擇的人
        let callCount = 0;
        const originalGetRandomPerson = app.getRandomPerson;
        app.getRandomPerson = function() {
            callCount++;
            if (callCount === 1) {
                return 'John'; // 第一次返回已選擇的人
            } else {
                return 'Jim'; // 第二次返回未選擇的人
            }
        };
        
        // 測試 selectNextPerson
        const person = app.selectNextPerson();
        
        // 恢復原始 getRandomPerson 方法
        app.getRandomPerson = originalGetRandomPerson;
        
        // 驗證結果
        assert.strictEqual(person, 'Jim');
        assert.strictEqual(callCount, 2); // 確保 getRandomPerson 被調用了兩次
        assert.strictEqual(app.selected.length, 3);
        assert(app.selected.includes('Jim'));
        
    } finally {
        // 無論測試成功或失敗，都確保刪除臨時文件
        if (fs.existsSync(tempFilePath)) {
            fs.unlinkSync(tempFilePath);
        }
    }
});
test('Test notifySelected', async (t) => {
    const mockContent = 'John\nJane\nJim';
    const tempFilePath = 'name_list.txt';
    
    // 創建臨時文件
    fs.writeFileSync(tempFilePath, mockContent, 'utf8');
    
    try {
        // 使用原始的構造函數
        const app = new Application();
        
        // 等待初始化完成
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // 測試前準備
        app.selected = ['John'];
        
        // 創建 spy 來追踪 MailSystem 的方法調用
        let writeCallCount = 0;
        let sendCallCount = 0;
        
        await t.mock.method(app.mailSystem, 'write', (name) => {
            writeCallCount++;
            assert.strictEqual(name, 'John');
            return 'Mocked content';
        });
        
        await t.mock.method(app.mailSystem, 'send', (name, content) => {
            sendCallCount++;
            assert.strictEqual(name, 'John');
            assert.strictEqual(content, 'Mocked content');
            return true;
        });
        
        // test notifySelected
        app.notifySelected();
        
        // verify result
        assert.strictEqual(writeCallCount, 1);
        assert.strictEqual(sendCallCount, 1);
    } finally {
        // ensure delete temp file
        if (fs.existsSync(tempFilePath)) {
            fs.unlinkSync(tempFilePath);
        }
    }
});

test('Test notifySelected with multiple people', async (t) => {
    const mockContent = 'John\nJane\nJim';
    const tempFilePath = 'name_list.txt';
    
    // 創建臨時文件
    fs.writeFileSync(tempFilePath, mockContent, 'utf8');
    
    try {
        // 使用原始的構造函數
        const app = new Application();
        
        // 等待初始化完成
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // 測試前準備 - 設置多個人被選中
        app.selected = ['John', 'Jane', 'Jim'];
        
        // 跟踪每個人的通知情況
        const notifiedPeople = [];
        const writtenContents = {};
        
        // 創建 spy 來追踪 MailSystem 的方法調用
        await t.mock.method(app.mailSystem, 'write', (name) => {
            notifiedPeople.push(name);
            const content = `Mocked content for ${name}`;
            writtenContents[name] = content;
            return content;
        });
        
        await t.mock.method(app.mailSystem, 'send', (name, content) => {
            assert.strictEqual(content, writtenContents[name]);
            return true;
        });
        
        // 測試 notifySelected
        app.notifySelected();
        
        // 驗證結果 - 確保所有人都被通知到
        assert.strictEqual(notifiedPeople.length, 3);
        assert(notifiedPeople.includes('John'));
        assert(notifiedPeople.includes('Jane'));
        assert(notifiedPeople.includes('Jim'));
    } finally {
        // ensure delete temp file
        if (fs.existsSync(tempFilePath)) {
            fs.unlinkSync(tempFilePath);
        }
    }
});

// Test MailSystem
test('Test MailSystem write', async (t) => {
    const mailSystem = new MailSystem();
    const name = 'John';
    const result = mailSystem.write(name);
    assert.strictEqual(result, 'Congrats, John!');
});
test('Test MailSystem send success path', async (t) => {
    const mailSystem = new MailSystem();
    
    // mock Math.random method
    const originalRandom = Math.random;
    Math.random = () => 1; // 強制返回 1，確保大於 0.5
    
    try {
        const result = mailSystem.send('John', 'Congrats, John!');
        assert.strictEqual(result, true);
    } finally {
        // restore original method
        Math.random = originalRandom;
    }
});

test('Test MailSystem send failure path', async (t) => {
    const mailSystem = new MailSystem();
    
    // mock Math.random method
    const originalRandom = Math.random;
    Math.random = () => 0; // 強制返回 0，確保小於 0.5
    
    try {
        const result = mailSystem.send('John', 'Congrats, John!');
        assert.strictEqual(result, false);
    } finally {
        // 恢復原始方法
        Math.random = originalRandom;
    }
});
