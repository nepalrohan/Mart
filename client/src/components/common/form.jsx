import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const types = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isLoading,
  isBtnDisabled,
}) {
  function renderInputByComponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";
    switch (getControlItem.componentType) {
      case types.INPUT:
        element = (
          <Input
            name={getControlItem.name}
            type={getControlItem.type}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            onChange={(event) => {
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              });
            }}
            value={value}
          />
        );
        break;

      case types.SELECT:
        element = (
          <Select
            value={value}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem.name]: value,
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case types.TEXTAREA:
        element = (
          <Textarea
            name={getControlItem.name}
            type={getControlItem.type}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
            value={value}
          />
        );
        break;

      default:
        element = (
          <Input
            name={getControlItem.name}
            type={getControlItem.type}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
            value={value}
          />
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 ">
        {formControls.map((controlItem) => {
          return (
            <div key={controlItem.name} className="grid w-full gap-1.5">
              <Label className="mb-1">{controlItem.label}</Label>
              {renderInputByComponentType(controlItem)}
            </div>
          );
        })}
      </div>

      <Button
        disabled={isBtnDisabled || isLoading}
        className={` ${
          isBtnDisabled ? "cursor-not-allowed " : "cursor-pointer"
        } mt-4 w-full  `}
        type="submit"
      >
        {" "}
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2   " /> Wait...
          </>
        ) : (
          buttonText || "Submit"
        )}
      </Button>
    </form>
  );
}

export default CommonForm;
