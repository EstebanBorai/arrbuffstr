export enum Env {
  Browser = 'Browser',
  Node = 'Node',
}

function getEnv(): Env {
  if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
    return Env.Browser;
  }

  if (
    typeof process !== 'undefined' &&
    process.versions !== null &&
    process.versions.node !== null
  ) {
    return Env.Node;
  }

  throw new Error('Current runtime environment is not supported');
}

export default getEnv;
