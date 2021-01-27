import { Props, useFooter } from "./useFooter";

export const Footer: React.FC<Props> = () => {
  const {
    classes,
    value,
    handleChange,
    BottomNavigation,
    BottomNavigationAction,
    ListIcon,
    CheckIcon,
    DeleteIcon,
  } = useFooter();

  return (
    <div>
      <BottomNavigation
        value={value}
        className={classes.bar}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction label="Remaining" icon={<ListIcon />} />
        <BottomNavigationAction label="Completed" icon={<CheckIcon />} />
        <BottomNavigationAction label="Deleted" icon={<DeleteIcon />} />
      </BottomNavigation>
    </div>
  );
};
