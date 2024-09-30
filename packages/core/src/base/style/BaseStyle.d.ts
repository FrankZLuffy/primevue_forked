/**
 *
 * [Live Demo](https://primevue.org/)
 *
 * @module basestyle
 *
 */
import type { Style, StyleOptions } from '@primevue/core/usestyle';

// 定义一个空的枚举 BaseClasses，可能用于后续定义样式类
export enum BaseClasses {}

// 定义一个接口 BaseStyle，描述样式的相关属性和方法
export declare interface BaseStyle {
    // 可选的名称，用于描述样式
    name?: string | undefined;
    // 可选的 CSS 字符串，直接定义样式
    css?: string | undefined;
    // 可选的类对象，包含一个或多个 CSS 类
    classes?: object | undefined;
    // 可选的内联样式对象
    inlineStyles?: object | undefined;
    // 可选的加载方法，接受样式和选项并返回样式对象
    load?: ((style: string | ((params?: any) => string | undefined), options?: StyleOptions) => Style | object | undefined) | undefined;
    // 可选的方法，用于获取样式表
    getStyleSheet?: ((extendedCSS?: string, props?: any) => string | undefined) | undefined;
}