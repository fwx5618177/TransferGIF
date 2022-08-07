/**
 * 返回 hello 开头的字符串
 * @param str - input string
 * @returns 'hello xxx'
 * @example
 * ```ts
 * test('ts') => 'hello ts'
 * ```
 *
 * @author ziming
 * @beta
 */
export const trim = (s: string): string => {
    return (s || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
