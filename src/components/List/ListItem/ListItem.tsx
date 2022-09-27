export const ListItem = ({ depth, children }: any) => {
  let node = <li className="truncate">{children}</li>;

  if (depth < 5) {
    if (depth > 1) {
      for (const _ of Array(depth)) {
        node = (
          <ul>
            <li className="pl-4">{node}</li>
          </ul>
        );
      }
    }

    return node;
  }

  return null;
};
