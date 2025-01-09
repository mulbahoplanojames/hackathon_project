"use client";

import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import CreateGroupButton from "./create-group-button";
import { GroupCardType } from "@/types/types";
import Image from "next/image";

const GroupCards = () => {
  const [groups, setGroups] = useState<GroupCardType[]>([]);

  // Fetch groups from localStorage on component mount
  useEffect(() => {
    const storedGroups = localStorage.getItem("groups");
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  }, []);

  const handleDelete = (index: number) => {
    const updatedGroups = [...groups];
    updatedGroups.splice(index, 1);
    setGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
  };

  const handleAddGroup = (group: GroupCardType) => {
    const updatedGroups = [...groups, group];
    setGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
  };

  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center gap-4 pt-3">
          <p className="text-lg">Groups</p>
          <CreateGroupButton onAddGroup={handleAddGroup} />
        </div>
        <div className="mt-4 space-y-4">
          {groups.length > 0 ? (
            groups.map((group, index) => (
              <div
                key={index}
                className="border rounded p-4 flex justify-between items-center gap-4"
              >
                <div className="flex md:gap-2 gap-1 items-center">
                  <div className="">
                    <p className="font-bold">{group.name}</p>
                    <p>{group.description}</p>
                  </div>
                  {group.image && (
                    <div className="mt-2 md:w-16 md:h-16 w-12 h-12 overflow-hidden rounded relative order-first">
                      <Image
                        src={group.image}
                        alt={`${group.name} image`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No groups created yet.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupCards;
