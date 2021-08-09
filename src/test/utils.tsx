import { shallow } from "enzyme";
import { renderHook } from "@testing-library/react-hooks";
import renderer from "react-test-renderer";

const setUp = (Component, props) => shallow(<Component {...props} />);

const idFinder = (component, attr) => component.find(`[id='${attr}']`);

const slotFinder = (component, attr) => component.find(`[slot='${attr}']`);

const roleFinder = (component, attr) => component.find(`[role='${attr}']`);

const keyFinder = (component, attr) => component.find(`[key='${attr}']`);

const classFinder = (component, attr) => component.find(attr);

const typeFinder = (component, attr) => component.find(`[type='${attr}']`);

const itif = (condition) => (condition ? it : it.skip);

const useHook = (hook, initialState?: any) =>
  renderHook(() => hook(initialState));

const useTree = (Component) => {
  const instance = renderer.create(<Component />);
  return instance.toJSON();
};

export {
  idFinder,
  classFinder,
  itif,
  useHook,
  setUp,
  useTree,
  typeFinder,
  slotFinder,
  roleFinder,
  keyFinder,
};
