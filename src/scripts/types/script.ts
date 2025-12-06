export type Script = {
  /**
   * The name of a function which should be called when this script is mounted
   */
  bootstrap?: string;
  /**
   * The path to the script file, relative to the calling partial
   * 
   * TODO: this will need to be correct *after* the project is built. We'll likely need to add something in tsconfig to facilitate this
   */
  path: string;
};
