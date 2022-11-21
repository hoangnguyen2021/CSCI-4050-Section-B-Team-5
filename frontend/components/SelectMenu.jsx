import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "../utils/utils";

const SelectMenu = ({ label, options, selected, setSelected }) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div>
          <Listbox.Label className="block text-on-primary text-base font-medium">
            {label}
          </Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative bg-transparent w-full cursor-default border-b border-on-primary py-2 pl-3 pr-10 text-left focus:border-b-2 sm:text-sm">
              <span className="block truncate text-base">
                {selected?.name ?? ""}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-6 w-6 text-on-primary"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 max-h-36 w-full overflow-auto bg-background border py-1 focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "text-on-primary bg-primary"
                          : "text-on-primary",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate text-base text-on-primary"
                          )}
                        >
                          {option.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
};

export default SelectMenu;
