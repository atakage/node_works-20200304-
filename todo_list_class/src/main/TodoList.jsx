import React, { Component } from "react";
import TodoItem from "./TodoItem";

/*

    LifeCycle method
    처음 컴포넌트를 생성하고 start를 했을 때
    code snippet이 생성하는 method는 16.3이전에 주로 사용하던 method
    16.3 이후에는 일부 method가 변경되거나 소멸 
    소멸되는 method : 성능상의 이슈를 발생시킬 수 있는 소지가 있어 소멸하거나 다른 method로 대치(변경)하기로 결정됨

    1. constructor() 가 실행
    2. componentWillMount()
    3. render()
    4. componentDidMount()

*/

class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  /*

    화면에 리스트를 표시하기 위한 todoList 배열이 변경이 되었는가를 판단해 render() 함수를 호출할지 안할지 알려주는 method
    js에서 객체(배열) == 객체(배열) 비교를 할 경우
    간혹 비슷한 주소 위치를 참조하여  서로 내용이 다름에도 같은 배열로 나타나는 경우가 있음
    객체(배열) === 객체(배열) 처럼 비교를 하면
    깊이비교(내용으로)로 비교하여 정확한 결과 얻을 수 있음

  */
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.TodoList !== nextProps.TodoList;

    //return true;
  }

  render() {
    // 부모 컴포넌트에서 전달받은 데이터를 분해
    const { todoList, onToggle, onDelete } = this.props;
    const todoMaps = todoList.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    ));

    return <div>{todoMaps}</div>;
  }
  // v17 이후에서는 사용 불가
  //componentWillMount() {}

  // v17 이후에서는 사용 불가
  //componentDidMount() {}

  // v17 이후에서는 사용 불가
  // getDeriverdStateFromProps()로 변경
  //componentWillReceiveProps(nextProps) {}

  // v17 이후에서는 사용 불가
  // getSnapshotBeforUpdate()
  //componentWillUpdate(nextProps, nextState) {}

  // v17 이후에서는 사용 불가
  //componentDidUpdate(prevProps, prevState) {}

  //componentWillUnmount() {}
}

export default TodoList;
