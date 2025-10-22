const FontsListItem = ({ font }: { font: string }) => {
  return (
    <li className={`mb-2 text-nowrap`}>
      Rajesh Ranjan | <span>{font}</span>
    </li>
  );
};

export default FontsListItem;
