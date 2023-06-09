import { DropdownMenu } from '@/common/components';
import { Input } from '@mantine/core';
import { HiSearch, HiMenu, HiOutlineBell } from 'react-icons/hi';

type HeaderProps = {
  onOpenDrawer: () => void;
  onLogout: () => void;
};

export const Header = ({ onLogout, onOpenDrawer }: HeaderProps) => {
  return (
    <header className="mb-2 flex items-center justify-between">
      <h2 className=" flex gap-2 text-2xl font-bold">
        <HiMenu className="h-8 md:hidden" onClick={onOpenDrawer} />
        Hi John Doe
      </h2>
      <div className="flex items-center justify-between space-x-4 md:justify-center">
        <Input
          className="hidden lg:block"
          classNames={{
            input: 'text-white placeholder:text-white',
          }}
          icon={<HiSearch className="h-4 text-white" />}
          variant="filled"
          placeholder="Search"
          radius="xl"
          size="md"
        />

        <div className="h-full w-[1px] bg-white" />

        <div className="cursor-pointer grid place-items-center rounded-full bg-white/20 p-2 hover:bg-white/30">
          <HiOutlineBell className="text-white h-6 w-6" />
        </div>
        <DropdownMenu onLogout={onLogout} />
      </div>
    </header>
  );
};

// export default Header;
