import React, { useState } from "react";
import Comb from '../../images/comb.svg';
interface ButtonProps {
    // text: string;
    // buttonClick: ()=>void;
}
function BreshComponent(props: ButtonProps) {
    const [tabindex, settTab] = useState(1);
    function setTabIndex(val: number) {
        settTab(val);
    }
    return (
        <div className="rounded-xl mt-4  border-y  border-teal-700 h-20 bg-white">
            <ul className=" h-full flex flex-row  text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li className=" basis-2/6 h-full " role="presentation">
                    <button onClick={() => { }} className={"rounded-xl h-full text-xs w-full inline-block px-4 py-1  border-b-2 font-black border-transparent bg-teal-700 text-white"} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                    <img src={Comb} alt="Icon" />
                        歯みがき
                    </button>
                </li>
                <li className="mx-2 basis-1/6 h-full py-2" role="presentation">
                    <button onClick={() => { setTabIndex(1) }} className={"rounded-xl h-full text-xs w-full inline-block 7  border-b-2 font-black border-transparent  " + (tabindex == 1 ? "bg-teal-700 text-white" : "text-teal-700 bg-white")} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"><span className="font-black text-xl">3</span>分<br></br>未満</button>
                </li>
                <li className="mx-2 basis-1/6 py-2" role="presentation h-full">
                    <button onClick={() => { setTabIndex(2) }} className={"rounded-xl h-full text-xs w-full inline-block 7  border-b-2 font-black border-transparent  " + (tabindex == 2 ? "bg-teal-700 text-white" : "text-teal-700 bg-white")} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false"><span className="font-black text-xl">3-5</span><br></br>分</button>
                </li>
                <li className="mx-2 basis-1/6 py-2" role="presentation h-full">
                    <button onClick={() => { setTabIndex(3) }} className={"rounded-xl h-full text-xs w-full inline-block 7  border-b-2 font-black border-transparent  " + (tabindex == 3 ? "bg-teal-700 text-white" : "text-teal-700 bg-white")} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false"><span className="font-black text-xl">5-10</span><br></br>分</button>
                </li>
                <li className="mx-2 basis-1/6 py-2" role="presentation h-full">
                    <button onClick={() => { setTabIndex(4) }} className={"rounded-xl h-full text-sm w-full inline-block 7  border-b-2 font-black border-transparent  " + (tabindex == 4 ? "bg-teal-700 text-white" : "text-teal-700 bg-white")} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false"><span className="font-black text-xl">10</span>分<br></br>以上</button>
                </li>
            </ul>
        </div>
    );
};
export default BreshComponent;