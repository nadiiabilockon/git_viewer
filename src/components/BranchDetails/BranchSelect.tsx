import React, { useContext } from "react";
import Select from "react-select";
import { BrancContext } from "./BranchMain";

export default function BranchSelect(props: { name: string }) {
  const {
    selectOptions,
    handleSelectChange,
    firstBranch,
    secondBranch,
  } = useContext(BrancContext);

  const checked = props.name === "firstBranch" ? secondBranch : firstBranch;
  
  return (
    <Select
      options={selectOptions!.filter((el) => el.value !== checked)}
      onChange={(e: { value: string }) => handleSelectChange!(e, props.name)}
    />
  );
}
