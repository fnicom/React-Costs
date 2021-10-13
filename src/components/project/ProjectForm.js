import React from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitBtn from "../form/SubmitBtn";
import styles from "./ProjectForm.module.css";

const ProjectForm = ({ btnText }) => {
  return (
    <div>
      <form className={styles.form}>
        <Input
          type="text"
          text="Nome do Projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />
        <Input
          type="number"
          text="Orçamento do Projeto"
          name="budget"
          placeholder="Insira o orçamento total"
        />
        <Select name="category_id" text="selecione a categoria" />
        <SubmitBtn text={btnText} />
      </form>
    </div>
  );
};

export default ProjectForm;
