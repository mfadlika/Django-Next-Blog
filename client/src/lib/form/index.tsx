import React, { ReactElement, useState } from "react";

type ButtonType = (params: any) => any;

interface style {
  style?: {};
  className?: string;
}

type ButtonVariant = "button" | "reset" | "submit" | undefined;

interface FormProps extends style {
  children: React.ReactNode;
  onSubmit: ButtonType;
}

export default function Form({
  children,
  onSubmit,
  style,
  className,
}: FormProps): ReactElement {
  return (
    <form
      className={`${className + " "} space-y-4 md:space-y-6`}
      style={style}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

interface InputProps extends style {
  type?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string | undefined;
  onChange?: ButtonType;
}

export function Input({
  type = "text",
  label = "",
  name = "",
  placeholder = "",
  value = undefined,
  onChange = () => {},
  style,
  className,
}: InputProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>

      {value == undefined ? (
        <input
          style={style}
          defaultValue=""
          type={type}
          name={name}
          className={`${
            className + " "
          } bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder={placeholder}
        />
      ) : (
        <input
          style={style}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${
            className + " "
          } bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

interface ButtonProps extends style {
  value?: string;
  type?: ButtonVariant;
  params?: boolean;
  onClick?: ButtonType;
}

export function Button({
  value = "Click",
  type = "button",
  style,
  className,
  onClick = () => {},
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`${
        className + " "
      } w-full bg-black text-white hover:text-black hover:bg-white dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg px-5 py-2.5 text-center`}
    >
      {value}
    </button>
  );
}

export function ToggleButton({
  value = "Toggle me",
  onClick = () => {},
  params = true,
}: ButtonProps) {
  const [check, setCheck] = useState<boolean>(params);
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        onChange={(event) => {
          onClick(event);
          setCheck(!check);
        }}
        checked={check}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {value}
      </span>
    </label>
  );
}