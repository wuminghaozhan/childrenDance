import ChildrenDanceLogo from "../children-dance-logo";
import Sign from "../sign";
import NavList from "./nav-list";

export default function TopBar() {
    return (
        <div className="flex flex-row items-center justify-between p-4 bg-blue-500">
            <ChildrenDanceLogo />
            <NavList />
            <Sign />
        </div>
        
    )   
}