import { useMemo, useState } from 'react';
import MatryoshkaIcon from './MatryoshkaIcon';
import { getRandomNumber } from '../utils/helpers';

const Matryoshka = ({
  matryoshkaChildren,
  level,
}: {
  matryoshkaChildren: number;
  level: number;
}) => {
  const [showChildren, setShowChildren] = useState(false);

  const children = useMemo(() => {
    const mChildren = [];
    for (let index = 0; index < matryoshkaChildren; index++) {
      mChildren.push(
        <Matryoshka
          key={index}
          matryoshkaChildren={getRandomNumber(0, level === 1 ? 3 : 2)}
          level={level + 1}
        />
      );
    }
    return mChildren;
  }, [matryoshkaChildren, level]);

  if (level === 4) {
    return null;
  }

  const columnsClass = `columns-${showChildren ? children.length : 1}`;

  return (
    <div className={`grid ${columnsClass} gap-5 items-center`}>
      {showChildren ? (
        children
      ) : (
        <MatryoshkaIcon
          width={150 - level * 25}
          height={150 - level * 25}
          onClick={() => setShowChildren(true)}
        />
      )}
    </div>
  );
};
export default Matryoshka;
