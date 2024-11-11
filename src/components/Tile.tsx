import React, { useState } from "react";
import { DeleteIcon, FlagIcon, Pencil } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Box, Modal } from "@mui/material";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const StudentTile = ({
  name,
  age,
  address,
  grade,
  studentClass,
}: {
  name: string;
  age: number;
  address: string;
  grade: string;
  studentClass: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <div
        onClick={() => setOpen(true)}
        className="bg-[#c9d6efcc] rounded-2xl shadow-md overflow-hidden m-2 border border-gray-800 "
      >
        <div className="px-6 py-4 rounded-lg flex justify-between items-start">
          <div>
            {" "}
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-black text-base">
              Age: {age} | Class: {studentClass}
            </p>
            <p className="text-gray-700 text-base">{address}</p>
            <div className="mt-4">
              <h3 className="font-bold text-lg">Grades:{grade}</h3>
            </div>
          </div>

          <div className="gap-2 flex">
            <Button
              variant="secondary"
              className="bg-blue-500 text-white rounded-xl hover:bg-blue-400 "
            >
              <Pencil />
            </Button>

            <Button
              variant="secondary"
              className="bg-yellow-500 text-white rounded-xl hover:bg-yellow-400"
            >
              <FlagIcon />
            </Button>

            <Button
              variant="secondary"
              className="bg-red-500 text-white rounded-xl hover:bg-red-400 "
            >
              <DeleteIcon />
            </Button>
          </div>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white rounded-[16px] items-start max-w-[86%] md:max-w-[45%] rounded-2xl" style={{borderRadius: "16px"}}>
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">Student Details</DialogTitle>
            <DialogDescription>
              <div className=" pt-2 text-start">
                <div className="py-2 flex justify-between items-start">
                  <div>
                    {" "}
                    <div className=" text-lg mb-2">
                      <b>Name:</b> {name}
                    </div>
                    <div className=" text-lg mb-2">
                      <b>class:</b> {studentClass}
                    </div>
                    <div className=" text-lg mb-2">
                      <b>Age:</b> {age}
                    </div>
                    <div className=" text-lg mb-2">
                      <b>Address:</b> {address}
                    </div>
                    <div className=" text-lg mb-2">
                      <b>Blood Group:</b> B+
                    </div>
                    <div className=" text-lg mb-2">
                      <b>Attendance: </b> 70%
                    </div>
                    <div className="mt-4">
                      <div className=" text-lg mb-2">
                        <b>Grades:</b> {grade}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StudentTile;
