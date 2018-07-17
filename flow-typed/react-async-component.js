import type { Component, ComponentType } from 'react';
declare module 'test' {
  declare function wrap<P>(BaseComponent: ComponentType<P>): ComponentType<P>
}
