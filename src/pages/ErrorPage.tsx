import { isObject } from "@/utils/forTypes";
import { Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

interface IRouterError {
  data?: string;
  error?: string;
  internal?: boolean;
  status?: number;
  statusText?: string;
}

const ErrorPage = () => {
  const errorData = useRouteError() as IRouterError;
  console.error(errorData);

  const errorStatusText =
    isObject(errorData) &&
    "statusText" in errorData &&
    typeof errorData.statusText === "string" &&
    errorData.statusText;
  const errorMessage =
    isObject(errorData) &&
    "message" in errorData &&
    typeof errorData.message === "string" && 
    errorData.message;

  return (
    <Flex
      display="flex"
      align="center"
      justify="center"
      direction="column"
      gap="2"
    >
      <h1>Упс!Ошибка {}</h1>
      <p>Страница не найдена</p>
      <p>
        <i>{errorStatusText || errorMessage}</i>
      </p>
      <Link to="/">Вернуться на главную</Link>
    </Flex>
  );
};

export default ErrorPage;
