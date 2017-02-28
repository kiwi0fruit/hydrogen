'use babel';

import { observable } from 'mobx';
import { grammarToLanguage } from './../utils';

export default class KernelStore {
  @observable name = ''
  @observable displayName = ''
  @observable executionState = 'loading'

  constructor(kernelClass) {
    this.kernelClass = kernelClass;
    this.name = grammarToLanguage(kernelClass.grammar);
    this.displayName = kernelClass.kernelSpec.display_name;
  }
}