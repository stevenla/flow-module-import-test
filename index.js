// @flow
//
import {wrap} from 'test';
import React, { type ComponentType } from 'react';

const X: ComponentType<{| foo: string |}> = () => null;

// $ExpectError
const test = <X />;

