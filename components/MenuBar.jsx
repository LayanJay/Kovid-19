import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
];

export default function MenuBar() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-72 m-4">
      <Listbox value={selected} onChange={setSelected}>
        <div className="mt-1 relative">
          <Listbox.Button className="w-full py-2 px-4 text-left rounded-lg border-2 border-gray border-opacity-25 cursor-pointer focus:outline-none hover:text-gray transition ease-in text-xl sm:text-2xl font-medium inline-flex items-center justify-between">
            <span className="">{selected.name}</span>
            <span className="pointer-events-none">
              <ChevronDownIcon
                className="w-7 h-7 text-gray"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            enter="transition duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-150 ease-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base border-2 border-gray border-opacity-25 bg-white rounded-md shadow-lg max-h-60 focus:outline-none">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${
                      active
                        ? "text-black bg-pink-base bg-opacity-80"
                        : "text-gray"
                    }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-pink-dark" : "text-pink-base"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
