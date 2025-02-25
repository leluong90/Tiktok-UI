import Button from "../../Button";
type MenuItemProps = {
    data: any,
    onClick: ()=> void
}

function MenuItem({ data , onClick }: MenuItemProps) {
  return (
    <Button leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
