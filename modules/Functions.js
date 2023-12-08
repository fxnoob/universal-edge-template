export function factory(container) {
  const { Config } = container;

  function log(text) {
    console.log({text})
  }

  return {
    log
  };
}
