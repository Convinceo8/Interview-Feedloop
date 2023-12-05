import React from "react";
import { fetchTodolist } from "../store/actions/actionCreator";

function Todolist() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(fetchTodolist());
  }, [dispatch]);
  return (
    <>
      <div>a</div>
    </>
  );
}

export default Todolist;
