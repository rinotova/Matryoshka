import Matryoshka from './components/Matryoshka';
import { getRandomNumber } from './utils/helpers';

const initialMatryoshkaNumber = getRandomNumber(1, 2);

function App() {
  const initialMatryoshkas = [];
  for (let index = 0; index < initialMatryoshkaNumber; index++) {
    initialMatryoshkas.push(
      <Matryoshka
        key={index}
        matryoshkaChildren={getRandomNumber(0, 3)}
        level={1}
      />
    );
  }
  const columnsClass = `columns-${initialMatryoshkaNumber}`;

  return (
    <main className='flex flex-row items-center justify-center border-[20px] border-black border-solid bg-orange-50'>
      <div
        className={`grid min-h-[calc(100svh-40px)] w-[${
          initialMatryoshkas.length * 400
        }] gap-5 ${columnsClass} items-center`}
      >
        {initialMatryoshkas}
      </div>
    </main>
  );
}

export default App;
