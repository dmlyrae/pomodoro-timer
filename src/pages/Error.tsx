import React from "react";
import { ErrorProps } from "../types/Props";

const Error = (props: ErrorProps) => {
	return (
		<div className="page__content">
			<div className="flex flex-col min-h-screen justify-center">
				<div className="font-bold text-red-500 text-center p-2 md:p-5 leading-10 text-5xl">
					<h1>
						{props.message ? "Ошибка: " + props.message : "Страница не найдена"}{" "}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Error;
