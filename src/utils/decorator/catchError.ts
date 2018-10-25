export function CatchError(): any {
  return function CatchErrorDecorator(Wrapper) {
    return class CatchErrorContainer extends Wrapper {
      constructor(props) {
        super(props);
      }
      componentDidCatchError(err) {
        console.error(err);
      }
    };
  };
}
