import Button from "../Button";
import Input from "../Input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Dropdown, { DropdownOption } from "../Dropdown";
import styles from "./Form.module.scss";

interface FormDataProps {
  title: string;
  ticket: DropdownOption;
  priority: DropdownOption;
  user: DropdownOption;
  taskId: DropdownOption;
  taskCount: number;
  status: DropdownOption;
}

interface FormProps {
  onSubmit: (value) => void;
}

const schema = yup
  .object()
  .shape({
    title: yup.string().required("Bu alan boş bırakılamaz"),
    ticket: yup.object().required("Lütfen ticket seçiniz"),
    priority: yup.object().required("Lütfen priority seçiniz"),
    user: yup.object().required("Lütfen user seçiniz"),
    taskId: yup.object().required("Lütfen task seçiniz"),
    status: yup.object().required("Lütfen task seçiniz"),
    taskCount: yup.number().required("Bu alan boş bırakılamaz"),
  })
  .required();

const Form = ({ onSubmit }: FormProps) => {
  const { control, handleSubmit } = useForm<FormDataProps>({
    resolver: yupResolver(schema),
  });
  return (
    <form onSubmit={handleSubmit((value) => onSubmit(value))}>
      <div className={styles["form-container"]}>
        <Controller
          name="title"
          control={control}
          render={({ fieldState: { error }, field: { value, onChange } }) => (
            <span className={styles["form-label"]}>
              Title&nbsp;:
              <Input
                fullWidth
                value={value}
                onChange={onChange}
                id="title"
                placeholder="Lütfen başlık giriniz"
                type="text"
                error={error?.message}
              />
            </span>
          )}
        />
        <Controller
          name="ticket"
          control={control}
          render={({ fieldState: { error }, field: { value, onChange } }) => (
            <span className={styles["form-label"]}>
              Ticket&nbsp;:
              <Dropdown
                fullWidth
                options={
                  [
                    {
                      value: "bug",
                      label: "Bug",
                    },
                    {
                      value: "feature",
                      label: "Feature",
                    },
                  ] as DropdownOption[]
                }
                onSelect={onChange}
                value={value}
                error={error?.message}
              />
            </span>
          )}
        />
        <Controller
          name="priority"
          control={control}
          render={({ fieldState: { error }, field: { value, onChange } }) => (
            <span className={styles["form-label"]}>
              Priority&nbsp;:
              <Dropdown
                fullWidth
                options={
                  [
                    {
                      value: "low",
                      label: "Low",
                    },
                    {
                      value: "medium",
                      label: "Medium",
                    },
                    {
                      value: "high",
                      label: "High",
                    },
                  ] as DropdownOption[]
                }
                onSelect={onChange}
                value={value}
                error={error?.message}
              />
            </span>
          )}
        />
        <Controller
          name="user"
          control={control}
          render={({ fieldState: { error }, field: { value, onChange } }) => (
            <span className={styles["form-label"]}>
              User&nbsp;:
              <Dropdown
                fullWidth
                options={
                  [
                    {
                      value: "user1",
                      label: "Ali Yılmaz",
                    },
                    {
                      value: "user2",
                      label: "Tom Hardy",
                    },
                    {
                      value: "user3",
                      label: "Dwayne Johnson",
                    },
                  ] as DropdownOption[]
                }
                onSelect={onChange}
                value={value}
                error={error?.message}
              />
            </span>
          )}
        />
        <Controller
          name="taskId"
          control={control}
          render={({ fieldState: { error }, field: { value, onChange } }) => (
            <span className={styles["form-label"]}>
              Task&nbsp;:
              <Dropdown
                fullWidth
                options={
                  [
                    {
                      value: 1,
                      label: "EPC-03",
                    },
                    {
                      value: 2,
                      label: "EPC-04",
                    },
                    {
                      value: 3,
                      label: "EPC-05",
                    },
                  ] as DropdownOption[]
                }
                onSelect={onChange}
                value={value}
                error={error?.message}
              />
            </span>
          )}
        />
        <Controller
          name="taskCount"
          control={control}
          render={({ fieldState: { error }, field: { value, onChange } }) => (
            <span className={styles["form-label"]}>
              Task Count&nbsp;:
              <Input
                fullWidth
                value={value}
                onChange={onChange}
                id="taskCount"
                placeholder="Lütfen başlık giriniz"
                type="number"
                error={error?.message}
              />
            </span>
          )}
        />
        <Controller
          name="status"
          control={control}
          render={({ fieldState: { error }, field: { value, onChange } }) => (
            <span className={styles["form-label"]}>
              Status&nbsp;:
              <Dropdown
                fullWidth
                options={
                  [
                    {
                      value: "1",
                      label: "To-do",
                    },
                    {
                      value: "2",
                      label: "Done",
                    },
                  ] as DropdownOption[]
                }
                onSelect={onChange}
                value={value}
                error={error?.message}
              />
            </span>
          )}
        />
        <div className={styles.buttonContainer}>
          <Button className={styles.createButton}>Create</Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
