import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "../utils/utils";
import Link from "next/link";

const ComboBox_Category = ({ label, options, selected, setSelected }) => {
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.genre.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={selected} onChange={setSelected}>
      {({ open }) => (
        <div>
          <Combobox.Label className="text-on-primary text-base font-medium">
            {label}
          </Combobox.Label>
          <div className="relative mt-1">
            <Combobox.Input
              className="relative bg-transparent w-full cursor-default border-0 border-b border-on-primary py-2 pl-3 pr-10 text-base focus:border-0 focus:border-b-2 focus:border-on-primary focus:ring-0"
              onChange={(e) => setQuery(e.target.value)}
              displayValue={(option) => option.name}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none">
              <ChevronUpDownIcon
                className="h-6 w-6 text-on-primary"
                aria-hidden="true"
              />
            </Combobox.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Combobox.Options className="absolute z-10 mt-1 max-h-36 w-full overflow-auto bg-background border py-1 focus:outline-none sm:text-sm">
                {filteredOptions.map((option) => (
                  <Combobox.Option
                    key={option.id}
                    value={option}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "bg-primary text-on-primary"
                          : "text-on-primary",
                        "relative cursor-default select-none text-base py-2 pl-3 pr-9"
                      )
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        <Link href={`/${option.id}`}>
                          <div className="flex items-center">
                            <img
                              src={option.imageUrl}
                              alt=""
                              className="h-6 w-6 flex-shrink-0 rounded-full"
                            />
                            <span
                              className={classNames(
                                "ml-3 truncate",
                                selected && "font-semibold"
                              )}
                            >
                              {option.name}
                            </span>
                          </div>
                        </Link>

                        {selected && (
                          <span
                            className={classNames(
                              "absolute inset-y-0 right-0 flex items-center pr-4",
                              active ? "text-white" : "text-on-primary"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Combobox>
  );
};

export default ComboBox_Category;
