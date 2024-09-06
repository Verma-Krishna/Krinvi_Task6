import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function App() {
  return (
    <>
      <main className="h-screen  bg-blue-100">
        <header className=" h-1/10 pt-4 mx-4 border-b-[1px] border-gray-300">
          <div className=" flex justify-between items-center">
            <div className="grp1 flex items-center">
               <button className=" flex items-center py-2 px-5 border-2  border-gray-200 text-base font-medium text-gray-500  text-sm bg-slate-100 rounded-md"> <img src="group-chat.png" alt="" className="w-5 mr-1"/>Team</button>
               <button className=" flex items-center ml-2 py-2  px-3 border-2 border-gray-200 border-solid text-gray-500 font-medium text-base bg-slate-100 rounded-md"><img src="market.png" alt="" className="w-4 mr-1"/>Manager Role</button>
            </div>
            <div className="grp2 flex items-center">
              <button className=" flex flex-row-reverse items-center  py-2 px-3 border-2 border-gray-200 text-gray-500  text-base font-medium bg-slate-100 rounded-md"><img src="down.png" alt="" className="w-4 ml-1"/>Select Branch</button>
              <button className="py-2 px-1 text-white text-normal rounded  ml-2 border-blue-500 bg-blue-600">Add Member</button>
            </div>
          </div>
        </header>
        <hr />
        <body className="pt-2  bg-white mx-4 h-[90%] border border-t-0 border-2 border-l border-r border-t border-gray-300 border-solid">
          <div className="box1  py-2 mb-2 h-[28.5%] border-2 border-slate-100 mx-4 bg-slate-100 rounded-lg">
              <div className="row1 h-[22%] px-4  border-b-[2px] border-gray-300 flex items-center justify-between text-black font-bold">
                <h1>Manager</h1>
                <img src="delete.png" className="w-5"/>
              </div>
              <div className="px-4 row2 mt-2 mb-1 flex items-center ">
                <div className="col1 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Dashboard</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col1 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Floor Plans</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col2 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Manage Tables</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col3 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Reservations</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col4 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Guest List</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
              </div>
              <div className="px-4 row3 mb-1 flex items-center ">
                <div className="col1 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Reports</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col1 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Company Profile</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col2 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Branches</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col3 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Team</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col4 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Manage Roles</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
              </div>
              <div className="px-4 row4 flex items-center ">
                <div className="col1 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Team</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col2 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Integrations</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col3 flex justify-between items-center w-1/4">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Payment and Subscriptions</h1>
                   <FormControlLabel control={<Switch defaultChecked />}  className=""/>
                </div>
              </div>
          </div>
          <div className="box2  py-2 mb-2 h-[28.5%] border-2 border-slate-100 mx-4 bg-gray-100 rounded-lg">
              <div className="row1 h-[22%] px-4  border-b-[2px] border-gray-300 flex items-center justify-between text-black font-bold">
                <h1>Receptionist</h1>
                <img src="delete.png" className="w-5"/>
              </div>
              <div className="px-4 row2 mt-2 mb-1 flex items-center ">
                <div className="col1 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Dashboard</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col1 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Floor Plans</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col2 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Manage Tables</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col3 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Reservations</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col4 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Guest List</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
              </div>
              <div className="px-4 row3 mb-1 flex items-center ">
                <div className="col1 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Reports</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col1 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Company Profile</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col2 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Branches</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col3 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Team</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col4 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Manage Roles</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
              </div>
              <div className="px-4 row4 flex items-center ">
                <div className="col1 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Team</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col2 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Integrations</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col3 flex justify-between items-center w-1/4">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Payment and Subscriptions</h1>
                   <FormControlLabel control={<Switch defaultChecked />}  className=""/>
                </div>
              </div>
          </div>
          <div className="box3  py-2 mb-2 h-[28.5%] border-2 border-slate-100 mx-4 bg-gray-100 rounded-lg">
              <div className="row1 h-[22%] px-4  border-b-[2px] border-gray-300 flex items-center justify-between text-black font-bold">
                <h1>Staff</h1>
                <img src="delete.png" className="w-5"/>
              </div>
              <div className="px-4 row2 mt-2 mb-1 flex items-center ">
                <div className="col1 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Dashboard</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col1 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Floor Plans</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col2 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Manage Tables</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col3 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Reservations</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col4 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Guest List</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
              </div>
              <div className="px-4 row3 mb-1 flex items-center ">
                <div className="col1 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Reports</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col1 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Company Profile</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col2 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Branches</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col3 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Team</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col4 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Manage Roles</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
              </div>
              <div className="px-4 row4 flex items-center ">
                <div className="col1 flex justify-between items-center w-1/6">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Team</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col2 flex justify-between items-center w-1/5">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Integrations</h1>
                   <FormControlLabel control={<Switch defaultChecked />} label="|" className=""/>
                </div>
                <div className="col3 flex justify-between items-center w-1/4">
                   <h1 className="text-base text-gray-600 font-medium text-vlack">Payment and Subscriptions</h1>
                   <FormControlLabel control={<Switch defaultChecked />}  className=""/>
                </div>
              </div>
          </div>
          <div className="box3 px-4 flex justify-between items-center mx-4 mb-1 bg-gray-100 h-[9%] rounded-lg font-bold text-black">
               <h1>Staff</h1>
               <img src="delete.png" alt="" className="w-5"/>
          </div>
          
        </body>
      </main>
    </>
  );
}
