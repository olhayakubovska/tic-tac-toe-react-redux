import { FieldLayout } from "./field-layout";
import { checkEmptyCell, checkWin } from "../../utils";
import { setCurrentPlayer, setField, setStatus } from "../../actions";
import { PLAYER, STATUS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";

export const Field = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.status);
  const field = useSelector((state) => state.field);
  const currentPlayer = useSelector((state) => state.currentPlayer);

  const handleCellClick = (cellIndex) => {
    if (
      status === STATUS.WIN ||
      status === STATUS.DRAW ||
      field[cellIndex] !== PLAYER.NOBODY
    ) {
      return;
    }

    const newField = [...field];

    newField[cellIndex] = currentPlayer;

    dispatch(setField(newField));

    if (checkWin(newField, currentPlayer)) {
      dispatch(setStatus(STATUS.WIN));
    } else if (checkEmptyCell(newField)) {
      const newCurrentPlayer =
        currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
      dispatch(setCurrentPlayer(newCurrentPlayer));
    } else {
      dispatch(setStatus(STATUS.DRAW));
    }
  };

  return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};
