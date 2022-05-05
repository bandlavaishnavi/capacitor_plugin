import { WebPlugin } from '@capacitor/core';

import type { MyPluginPlugin } from './definitions';

export class MyPluginWeb extends WebPlugin implements MyPluginPlugin {
  // constructor() {
  //   super({
  //     name: 'MyPlugin',
  //     platforms: ['web']
  //   });
  // }
  
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

}
