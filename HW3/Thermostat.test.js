// 導入必要的類別
const Thermostat = require('./Thermostat');
const { ProgrammedSettings, Period, DayType } = require('./ProgrammedSettings');

// PC 測試案例
describe('Predicate Coverage Tests', () => {
  let thermostat;
  let settings;
  
  beforeEach(() => {
    thermostat = new Thermostat();
    settings = new ProgrammedSettings();
    thermostat.period = Period.DAY;
    thermostat.day = DayType.WEEKDAY;
    thermostat.thresholdDiff = 2;
  });

  test('PC-1: P1 && P2 = true', () => {
    // 設定條件使 P1 && P2 為 true
    thermostat.setCurrentTemp(60); // P1 為 true (60 < 65 - 2)
    thermostat.timeSinceLastRun = 10; // P2 為 true (10 >= 0)
    
    const result = thermostat.turnHeaterOn(settings);
    expect(result.heaterOn).toBe(true);
  });

  test('PC-2: P1 && P2 = false', () => {
    // 設定條件使 P1 && P2 為 false
    thermostat.setCurrentTemp(70); // P1 為 false (70 > 65 - 2)
    thermostat.timeSinceLastRun = 10; // P2 為 true，但因為 P1 為 false，結果為 false
    
    const result = thermostat.turnHeaterOn(settings);
    expect(result.heaterOn).toBe(false);
  });
});

// CC 測試案例
describe('Clause Coverage Tests', () => {
  let thermostat;
  let settings;
  
  beforeEach(() => {
    thermostat = new Thermostat();
    settings = new ProgrammedSettings();
    thermostat.period = Period.DAY;
    thermostat.day = DayType.WEEKDAY;
    thermostat.thresholdDiff = 2;
  });

  test('CC-1: P1=true, P2=true', () => {
    thermostat.setCurrentTemp(60); // P1 為 true
    thermostat.timeSinceLastRun = 10; // P2 為 true
    
    const result = thermostat.turnHeaterOn(settings);
    expect(result.heaterOn).toBe(true);
  });

  test('CC-2: P1=true, P2=false', () => {
    thermostat.setCurrentTemp(60); // P1 為 true
    thermostat.timeSinceLastRun = -1; // P2 為 false
    
    const result = thermostat.turnHeaterOn(settings);
    expect(result.heaterOn).toBe(false);
  });

  test('CC-3: P1=false, P2=true', () => {
    thermostat.setCurrentTemp(70); // P1 為 false
    thermostat.timeSinceLastRun = 10; // P2 為 true
    
    const result = thermostat.turnHeaterOn(settings);
    expect(result.heaterOn).toBe(false);
  });

  test('CC-4: P1=false, P2=false', () => {
    thermostat.setCurrentTemp(70); // P1 為 false
    thermostat.timeSinceLastRun = -1; // P2 為 false
    
    const result = thermostat.turnHeaterOn(settings);
    expect(result.heaterOn).toBe(false);
  });
});

// CACC 測試案例
describe('Correlated Active Clause Coverage Tests', () => {
  let thermostat;
  let settings;
  
  beforeEach(() => {
    thermostat = new Thermostat();
    settings = new ProgrammedSettings();
    thermostat.period = Period.DAY;
    thermostat.day = DayType.WEEKDAY;
    thermostat.thresholdDiff = 2;
  });

  // 測試 P1 作為主動子句
  test('CACC-1: P1 主動 (true), P2=true', () => {
    thermostat.setCurrentTemp(60); // P1 為 true
    thermostat.timeSinceLastRun = 10; // P2 為 true
    
    const result = thermostat.turnHeaterOn(settings);
    expect(result.heaterOn).toBe(true);
  });

  test('CACC-2: P1 主動 (false), P2=true', () => {
    thermostat.setCurrentTemp(70); // P1 為 false
    thermostat.timeSinceLastRun = 10; // P2 為 true
    
    const result = thermostat.turnHeaterOn(settings);
    expect(result.heaterOn).toBe(false);
  });

  // 測試 P2 作為主動子句
  test('CACC-3: P1=true, P2 主動 (true)', () => {
    thermostat.setCurrentTemp(60); // P1 為 true
    thermostat.timeSinceLastRun = 10; // P2 為 true
    
    const result = thermostat.turnHeaterOn(settings);
    expect(result.heaterOn).toBe(true);
  });

  test('CACC-4: P1=true, P2 主動 (false)', () => {
    thermostat.setCurrentTemp(60); // P1 為 true
    thermostat.timeSinceLastRun = -1; // P2 為 false
    
    const result = thermostat.turnHeaterOn(settings);
    expect(result.heaterOn).toBe(false);
  });
});
