export const ListItem = ({ depth, children }: any) => {
  let node = <li>{children}</li>;

  for (const _ of Array(depth)) {
    node = (
      <ul>
        <li className="pl-4 truncate">{node}</li>
      </ul>
    );
  }

  return node;
};
