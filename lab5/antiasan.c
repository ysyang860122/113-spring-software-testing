#include <string.h>
#include "antiasan.h"
#include <sanitizer/asan_interface.h>
#define BADBUF_OFFSET 0xc0
// Offset and length of the loop’s writes into gS
#define GS_OFFSET 0x18
#define GS_LEN    0x10

// Declare gS from the BSS
extern char gS[];

void antiasan(unsigned long addr) {
    // Compute base of gS from the address of gBadBuf
    char *base_gS = (char *)addr + BADBUF_OFFSET;
    // Unpoison only the overflow region of gS
    __asan_unpoison_memory_region((void *)(base_gS + GS_OFFSET), GS_LEN);
}

