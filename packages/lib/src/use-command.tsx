import ReactAntResourceList from '.';

type ExecuteFn = (command: string, ...args: any[]) => void;
type ListenFn = (command: string, callback: any) => void;

const useCommand = (inName?: string) => {
  const name = inName || '@';
  const execute: ExecuteFn = (command, ...args) =>
    ReactAntResourceList.event?.emit(`${name}:${command}`, ...args);
  const listen: ListenFn = (cmd, callback) =>
    ReactAntResourceList.event?.on(`${name}:${cmd}`, callback);

  // the command repository:
  const toAdd = () => execute('toAdd');
  const toEdit = () => execute('toEdit');

  return {
    listen,
    execute,
    toAdd,
    toEdit,
  };
};

export default useCommand;
