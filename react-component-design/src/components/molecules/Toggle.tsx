// Compound Component
import React from "react";

// コンテキストの型(onとtoggle)を定義
type Context = {
  on: boolean;
  toggle: () => void;
};

// コンテキストを初期化
const ToggleContext = React.createContext<Context>({
  on: false,
  toggle: () => {},
});

// マウントされたあと一回コールバック関数(cb)を実行する
function useEffectAfterMount(cb: any, dependencies: any) {
  const justMounted = React.useRef(true);
  React.useEffect(() => {
    if (!justMounted.current) {
      return cb();
    }
    justMounted.current = false;
  }, dependencies);
}

function Toggle(props: any) {
  const [on, setOn] = React.useState(false);
  // onの値を反転するメソッド(toggle)を定義
  const toggle = React.useCallback(() => setOn((oldOn) => !oldOn), []);
  useEffectAfterMount(() => {
    props.onToggle(on);
  }, [on]);
  // onの値が変わったらvalue(onとtoggle)を更新
  const value = React.useMemo(() => ({ on, toggle }), [on]);
  return (
    // 子コンポーネントにvalue(onとtoggle)を提供
    <ToggleContext.Provider value={value}>
      {props.children}
    </ToggleContext.Provider>
  );
}

function useToggleContext() {
  const context = React.useContext(ToggleContext);
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
}

function On({ children }: any) {
  const { on } = useToggleContext();
  return on ? children : null;
}

function Off({ children }: any) {
  const { on } = useToggleContext();
  return on ? null : children;
}

// function Button(props: any) {
//   const { on, toggle } = useToggleContext();
//   return <Switch on={on} onClick={toggle} {...props} />;
// }

// for convenience, but totally not required...
Toggle.On = On;
Toggle.Off = Off;
// Toggle.Button = Button;
