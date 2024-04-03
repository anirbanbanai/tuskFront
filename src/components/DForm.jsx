import { Checkbox ,Button} from "@material-tailwind/react";
import { RxUpdate } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";
import { useForm } from "react-hook-form";
import { useState } from "react";

const DForm = () => {
  const [selectedOption, setSelectedOption] = useState("0");
  const [shareInfo, setShareinfo] = useState("0");
  const [gender, setGender] = useState("0");
  const [age, setAge] = useState("0");
  const [value, setValue] = useState("0");
  const [valueShare, setValueShare] = useState("0");
  const [nation, setNation] = useState("0");
  const [tissues, setTIssues] = useState("0");
  const [affected, setAffected] = useState("0");
  const [categoryFeedback, setCategoryFeedback] = useState("0");
  const [feedbackProjectIssues, setFeedbackProjectIssues] = useState("0");
  const [feedbackDepartmentIssues, setFeedbackDepartmentIssues] = useState("0");
  const [thermeticArea, setThermeticArea] = useState("0");
  const [categoryofComplain, setCategoryOfComplain] = useState("0");
  const [statusOfFeedback, setStatusOfFeedback] = useState("0");
  const [disability, setDisability] = useState("0");
  const [kinddisability, setkindDisability] = useState("0");

  const handleFeedbackCheckboxChange = (value) => {
    setSelectedOption(value);
  };
  const handleShareCheckboxChange = (value) => {
    setShareinfo(value);
  };
  const handleAgeCheckboxChange = (value) => {
    setAge(value);
  };
  const handleGenderCheckboxChange = (value) => {
    setGender(value);
  };
  const handleNationCheckboxChange = (value) => {
    setNation(value);
  };
  const handleTIssuesCheckboxChange = (value) => {
    setTIssues(value);
  };
  const handleAffectedCheckboxChange = (value) => {
    setAffected(value);
  };
  const handleCategoryFeedbackCheckboxChange = (value) => {
    setCategoryFeedback(value);
  };
  const handlefeedbackProjectCheckboxChange = (value) => {
    setFeedbackProjectIssues(value);
  };
  const handlefeedbackDepartmentCheckboxChange = (value) => {
    setFeedbackDepartmentIssues(value);
  };
  const handleThermeticAreaCheckboxChange = (value) => {
    setThermeticArea(value);
  };
  const handleCategoryOfComplainCheckboxChange = (value) => {
    setCategoryOfComplain(value);
  };
  const handleStatusOfFeedbackCheckboxChange = (value) => {
    setStatusOfFeedback(value);
  };
  const handleDisabilityCheckboxChange = (value) => {
    setDisability(value);
  };
  const handleKindDisabilityCheckboxChange = (value) => {
    setkindDisability(value);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // if (data.feedbackchannel == [" "]) {
    //   data.feedbackchannel = data.feedbackchannel.join(", ");
    // }
    console.log(data);
  };

  return (
    <div className="bg-white p-9  border-4 border-gray-400 rounded-sm mx-auto h-full max-w-2xl">
      <h2 className="text-3xl text-blue-400 font-semibold text-center">
        BDRCS CEA: Feedback form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 p-5">
        <div className="flex flex-col mb-5">
          <label htmlFor="" className="text-black font-semibold mb-2">
            <span className="text-3xl text-blue-400">*</span> Feedback received
            date
          </label>
          <div className="flex items-center gap-3">
            <input
              className=" peer w-2/4 h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" yyyy-mm-dd"
              {...register("Feedback_received_by_Date")}
            />
            <RxUpdate className="text-3xl" />
          </div>
        </div>

        <div className="flex flex-col  mb-5">
          <label htmlFor="" className="text-black font-semibold mb-2">
            <span className="text-3xl text-blue-400">*</span>Feedback received
            by (Name)
          </label>
          <input
            className=" peer w-3/4 h-full  font-sans  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
            {...register("Feedback_received_by_name")}
          />
        </div>
        <div className="flex flex-col mb-5 ">
          <label htmlFor="" className="text-black font-semibold mb-3">
            <span className="text-3xl text-blue-400">*</span>Designation
          </label>
          <input
            className=" peer w-3/4 h-full  font-sans  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
            {...register("designation")}
          />
        </div>

        <div className="flex flex-col mb-5 ">
          <label htmlFor="" className="text-black font-semibold mb-2">
            <span className="text-3xl text-blue-400">*</span>Feedback Channel
          </label>

          <Checkbox
            color="blue"
            label="Community meeting"
            value="Community meeting"
            onClick={() => setValue("0")}
            {...register("feedbackchannel")}
            checked={selectedOption === "Community meeting"}
            onChange={() => handleFeedbackCheckboxChange("Community meeting")}
          />
          <Checkbox
            color="blue"
            label="Face to face"
            value="tFace to face"
            onClick={() => setValue("0")}
            {...register("feedbackchannel")}
            checked={selectedOption === "Face to face"}
            onChange={() => handleFeedbackCheckboxChange("Face to face")}
          />
          <Checkbox
            color="blue"
            label="Feedback Email"
            value="tFeedback Email"
            onClick={() => setValue("0")}
            {...register("feedbackchannel")}
            checked={selectedOption === "Feedback Email"}
            onChange={() => handleFeedbackCheckboxChange("Feedback Email")}
          />
          <Checkbox
            color="blue"
            label="Hotline"
            value="Hotline"
            onClick={() => setValue("0")}
            {...register("feedbackchannel")}
            checked={selectedOption === "Hotline"}
            onChange={() => handleFeedbackCheckboxChange("Hotline")}
          />
          <Checkbox
            color="blue"
            label="Information and feedback desk"
            value="tInformation and feedback desk"
            onClick={() => setValue("0")}
            {...register("feedbackchannel")}
            checked={selectedOption === "Information and feedback desk"}
            onChange={() =>
              handleFeedbackCheckboxChange("Information and feedback desk")
            }
          />
          <Checkbox
            color="blue"
            label="Information and Feedback box"
            value="tInformation and Feedback box"
            onClick={() => setValue("0")}
            {...register("feedbackchannel")}
            checked={selectedOption === "Information and Feedback box"}
            onChange={() =>
              handleFeedbackCheckboxChange("Information and Feedback box")
            }
          />
          <Checkbox
            color="blue"
            label="Information and feedback hub"
            value="tInformation and feedback hub"
            onClick={() => setValue("0")}
            {...register("feedbackchannel")}
            checked={selectedOption === "Information and feedback hub"}
            onChange={() =>
              handleFeedbackCheckboxChange("Information and feedback hub")
            }
          />
          <Checkbox
            color="blue"
            label="Stakeholder consultation"
            value="tStakeholder consultation"
            onClick={() => setValue("0")}
            {...register("feedbackchannel")}
            checked={selectedOption === "Stakeholder consultation"}
            onChange={() =>
              handleFeedbackCheckboxChange("Stakeholder consultation")
            }
          />
          <Checkbox
            color="blue"
            label="Others"
            value="Others"
            onClick={() => setValue("1")}
            {...register("feedbackchannel")}
            checked={selectedOption === "Others"}
            onChange={() => handleFeedbackCheckboxChange("Others")}
          ></Checkbox>

          {value === "1" && (
            <div className="flex flex-col  mb-5">
              <label htmlFor="" className="text-black font-semibold mb-2">
                <span className="text-3xl text-blue-400">*</span>If Feedback
                Channel is others, please specify
              </label>
              <input
                className=" peer w-3/4 h-full  font-sans  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" "
                {...register("feedbackchannel")}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col mb-5 ">
          <label htmlFor="" className="text-black font-semibold mb-2">
            To ensure proper response of your feedback, we would like to collect
            some of your personal information (Name, Age, sex, NID). Would you
            like to share?
          </label>

          <Checkbox
            color="blue"
            label="Yes"
            value="Yes"
            onClick={() => setValueShare("2")}
            {...register("shareinformation")}
            checked={shareInfo === "Yes"}
            onChange={() => handleShareCheckboxChange("Yes")}
          />
          <Checkbox
            color="blue"
            label="No"
            value="No"
            onClick={() => setValueShare("0")}
            {...register("shareinformation")}
            checked={shareInfo === "No"}
            onChange={() => handleShareCheckboxChange("No")}
          />

          {valueShare === "2" && (
            <div className="mt-10">
              <h1 className="text-3xl font-bold text-blue-500 flex gap-1">
                <span>
                  <TiArrowSortedDown />
                </span>{" "}
                Personal information of the Feedback giver
              </h1>
              <div>
                <div className="flex flex-col  mb-5">
                  <label htmlFor="" className="text-black font-semibold mb-2">
                    <span className="text-3xl text-blue-400">*</span>Feedback
                    given by (Name)
                  </label>
                  <input
                    className=" peer w-3/4 h-full  font-sans  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                    {...register("Feedback_received_by_name")}
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col mb-5 ">
                  <label htmlFor="" className="text-black font-semibold mb-2">
                    <span className="text-3xl text-blue-400">*</span>Gender
                  </label>

                  <Checkbox
                    color="blue"
                    label="Male"
                    value="Male"
                    onClick={() => setValue("0")}
                    {...register("Gender")}
                    checked={gender === "Male"}
                    onChange={() => handleGenderCheckboxChange("Male")}
                  />
                  <Checkbox
                    color="blue"
                    label="Female"
                    value="Female"
                    onClick={() => setValue("0")}
                    {...register("Gender")}
                    checked={gender === "Female"}
                    onChange={() => handleGenderCheckboxChange("Female")}
                  />
                  <Checkbox
                    color="blue"
                    label="Non-binary"
                    value="tNon-binary"
                    onClick={() => setValue("0")}
                    {...register("Gender")}
                    checked={gender === "Non-binary"}
                    onChange={() => handleGenderCheckboxChange("Non-binary")}
                  />
                  <Checkbox
                    color="blue"
                    label="Not interested to mention"
                    value="Not interested to mention"
                    onClick={() => setValue("0")}
                    {...register("Gender")}
                    checked={gender === "Not interested to mention"}
                    onChange={() =>
                      handleGenderCheckboxChange("Not interested to mention")
                    }
                  />
                </div>
                <div className="flex flex-col mb-5 ">
                  <label htmlFor="" className="text-black font-semibold mb-2">
                    <span className="text-3xl text-blue-400">*</span>Age
                    Category
                  </label>

                  <Checkbox
                    color="blue"
                    label="0-9"
                    value="0-9"
                    onClick={() => setValue("0")}
                    {...register("Age")}
                    checked={age === "0-9"}
                    onChange={() => handleAgeCheckboxChange("0-9")}
                  />
                  <Checkbox
                    color="blue"
                    label="10-19"
                    value="10-19"
                    onClick={() => setValue("0")}
                    {...register("Age")}
                    checked={age === "10-19"}
                    onChange={() => handleAgeCheckboxChange("10-19")}
                  />
                  <Checkbox
                    color="blue"
                    label="20-29"
                    value="20-29"
                    onClick={() => setValue("0")}
                    {...register("Age")}
                    checked={age === "20-29"}
                    onChange={() => handleAgeCheckboxChange("20-29")}
                  />
                  <Checkbox
                    color="blue"
                    label="30-39"
                    value="30-39"
                    onClick={() => setValue("0")}
                    {...register("Age")}
                    checked={age === "30-39"}
                    onChange={() => handleAgeCheckboxChange("30-39")}
                  />
                  <Checkbox
                    color="blue"
                    label="40-49"
                    value="40-49"
                    onClick={() => setValue("0")}
                    {...register("Age")}
                    checked={age === "40-49"}
                    onChange={() => handleAgeCheckboxChange("40-49")}
                  />
                  <Checkbox
                    color="blue"
                    label="50-59"
                    value="50-59"
                    onClick={() => setValue("0")}
                    {...register("Age")}
                    checked={age === "50-59"}
                    onChange={() => handleAgeCheckboxChange("50-59")}
                  />
                  <Checkbox
                    color="blue"
                    label="60+"
                    value="60+"
                    onClick={() => setValue("0")}
                    {...register("Age")}
                    checked={age === "60+"}
                    onChange={() => handleAgeCheckboxChange("60+")}
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col  mb-5">
                  <label htmlFor="" className="text-black font-semibold mb-2">
                    <span className="text-3xl text-blue-400">*</span>Contact
                    Number <p className="text-sm font-light">(client)</p>
                  </label>
                  <input
                    className=" peer w-3/4 h-full  font-sans  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                    {...register("Contact_number")}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="text-black font-semibold mb-2">
                  <span className="text-3xl text-blue-400">*</span>Nationality
                </label>

                <div className="flex flex-col">
                  <Checkbox
                    color="blue"
                    label="Bangladeshi"
                    value="Bangladeshi"
                    onClick={() => setValueShare("0")}
                    {...register("nationality")}
                    checked={nation === "Bangladeshi"}
                    onChange={() => handleNationCheckboxChange("Bangladeshi")}
                  />
                  <Checkbox
                    color="blue"
                    label="Foreigner"
                    value="Foreigner"
                    onClick={() => setValueShare("1")}
                    {...register("nationality")}
                    checked={nation === "Foreigner"}
                    onChange={() => handleNationCheckboxChange("Foreigner")}
                  />
                </div>
                {/* TODO  foreigner others kaj*/}
              </div>
              <div>
                <div className="flex flex-col  mb-5">
                  <label htmlFor="" className="text-black font-semibold mb-2">
                    <span className="text-3xl text-blue-400">*</span>ID{" "}
                    <p className="text-sm font-light">
                      ((NID/ Beneficiary ID number/ Birth certificate/
                      Passport))
                    </p>
                  </label>
                  <input
                    className=" peer w-3/4 h-full  font-sans  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                    {...register("ID")}
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col  mb-5">
                  <label htmlFor="" className="text-black font-semibold mb-2">
                    <span className="text-3xl text-blue-400">*</span>Scan ID{" "}
                    <p className="text-sm font-light">
                      ((NID/ Beneficiary ID number/ Birth certificate/
                      Passport))
                    </p>
                  </label>
                  <input
                    className=" peer w-3/4 h-full  font-sans  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder="  Click to upload file (<10MB)"
                    {...register("ID")}
                  />
                </div>
              </div>
              <p>Address of the feedback provider</p>
              <div>
                <div className="flex flex-col  mb-5">
                  <label htmlFor="" className="text-black font-semibold mb-2">
                    <span className="text-3xl text-blue-400">*</span>Adress
                  </label>
                  <input
                    className=" peer w-3/4 h-full  font-sans  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder="  adress"
                    {...register("adress")}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col  mb-5">
          <label htmlFor="" className="text-black font-semibold mb-2">
            <span className="text-3xl text-blue-400">*</span>Description of the
            Issue/support (What, Who, Where, When, How)
          </label>
          <input
            className=" peer w-3/4 h-full  font-sans  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
            {...register("Issues")}
          />
        </div>

        <div className="flex flex-col mb-5 ">
          <label htmlFor="" className="text-black font-semibold mb-2">
            <span className="text-3xl text-blue-400">*</span>Types of
            Support/Issue
          </label>

          <Checkbox
            color="blue"
            label="
            
Service request"
            value="
            
Service request"
            onClick={() => setValue("0")}
            {...register("TypesOfIssus")}
            checked={tissues === "Service request"}
            onChange={() => handleTIssuesCheckboxChange("Service request")}
          />
          <Checkbox
            color="blue"
            label="
            Information request"
            value="
            Information request"
            onClick={() => setValue("0")}
            {...register("TypesOfIssus")}
            checked={tissues === "Information request"}
            onChange={() => handleTIssuesCheckboxChange("Information request")}
          />

          <Checkbox
            color="blue"
            label="Complaints"
            value="Complaints"
            onClick={() => setValue("0")}
            {...register("TypesOfIssus")}
            checked={tissues === "Complaints"}
            onChange={() => handleTIssuesCheckboxChange("Complaints")}
          />
          <Checkbox
            color="blue"
            label="Praise"
            value="Praise"
            onClick={() => setValue("0")}
            {...register("TypesOfIssus")}
            checked={tissues === "Praise"}
            onChange={() => handleTIssuesCheckboxChange("Praise")}
          />
          <Checkbox
            color="blue"
            label="Suggestion/improvement"
            value="Suggestion/improvement"
            onClick={() => setValue("0")}
            {...register("TypesOfIssus")}
            checked={tissues === "Suggestion/improvement"}
            onChange={() =>
              handleTIssuesCheckboxChange("Suggestion/improvement")
            }
          />
        </div>
        <div className="flex flex-col mb-5 ">
          <label htmlFor="" className="text-black font-semibold mb-2">
            <span className="text-3xl text-blue-400">*</span> People affected by
            the incidence
          </label>
          <Checkbox
            color="blue"
            label="Individual"
            value="Individual"
            onClick={() => setValue("0")}
            {...register("AffectedBy")}
            checked={affected === "Individual"}
            onChange={() => handleAffectedCheckboxChange("Individual")}
          />
          <Checkbox
            color="blue"
            label="Community"
            value="Community"
            onClick={() => setValue("0")}
            {...register("AffectedBy")}
            checked={tissues === "Community"}
            onChange={() => handleAffectedCheckboxChange("Community")}
          />
        </div>
        <div className="flex flex-col mb-5 ">
          <label htmlFor="" className="text-black font-semibold mb-2">
            <span className="text-3xl text-blue-400">*</span> Category of
            feedback
          </label>
          <Checkbox
            color="blue"
            label=" Non sensitive feedback related to BDRCS (15 Days)"
            value=" Non sensitive feedback related to BDRCS (15 Days)"
            onClick={() => setValue("0")}
            {...register("CategoryOfFeedback")}
            checked={
              categoryFeedback ===
              " Non sensitive feedback related to BDRCS (15 Days)"
            }
            onChange={() =>
              handleCategoryFeedbackCheckboxChange(
                " Non sensitive feedback related to BDRCS (15 Days)"
              )
            }
          />
          <Checkbox
            color="blue"
            label="Non sensitive feedback not related to BDRCS (15 Days)"
            value="Non sensitive feedback not related to BDRCS (15 Days)"
            onClick={() => setValue("0")}
            {...register("CategoryOfFeedback")}
            checked={
              categoryFeedback ===
              "Non sensitive feedback not related to BDRCS (15 Days)"
            }
            onChange={() =>
              handleCategoryFeedbackCheckboxChange(
                "Non sensitive feedback not related to BDRCS (15 Days)"
              )
            }
          />
          <Checkbox
            color="blue"
            label=" Sensitive feedback related to BDRCS (within 72 hours)"
            value=" Sensitive feedback related to BDRCS (within 72 hours)"
            onClick={() => setValue("0")}
            {...register("CategoryOfFeedback")}
            checked={
              categoryFeedback ===
              " Sensitive feedback related to BDRCS (within 72 hours)"
            }
            onChange={() =>
              handleCategoryFeedbackCheckboxChange(
                " Sensitive feedback related to BDRCS (within 72 hours)"
              )
            }
          />
          <Checkbox
            color="blue"
            label="Sensitive feedback not related to BDRCS (within 72 hours)"
            value=" Sensitive feedback not related to BDRCS (within 72 hours)"
            onClick={() => setValue("0")}
            {...register("CategoryOfFeedback")}
            checked={
              categoryFeedback ===
              "Sensitive feedback not related to BDRCS (within 72 hours)"
            }
            onChange={() =>
              handleCategoryFeedbackCheckboxChange(
                "Sensitive feedback not related to BDRCS (within 72 hours)"
              )
            }
          />
        </div>

        <div className="flex flex-col mb-5 ">
          <label htmlFor="" className="text-black font-semibold mb-2">
            <span className="text-3xl text-blue-400">*</span> Feedback/issue
            related to any project of BDRCS?
          </label>

          <Checkbox
            color="blue"
            label="Yes"
            value="Yes"
            onClick={() => setValue("0")}
            {...register("FeedbackProjectIssues")}
            checked={feedbackProjectIssues === "Yes"}
            onChange={() => handlefeedbackProjectCheckboxChange("Yes")}
          />
          <Checkbox
            color="blue"
            label="No"
            value="No"
            onClick={() => setValue("0")}
            {...register("FeedbackProjectIssues")}
            checked={feedbackProjectIssues === "No"}
            onChange={() => handlefeedbackProjectCheckboxChange("No")}
          />
        </div>

        <div className="flex flex-col mb-5 ">
          <label htmlFor="" className="text-black font-semibold mb-2">
            <span className="text-3xl text-blue-400">*</span> Feedback/issue
            related to department of BDRCS?
          </label>

          <Checkbox
            color="blue"
            label="Yes"
            value="Yes"
            onClick={() => setValue("0")}
            {...register("FeedbackDepartmentIssues")}
            checked={feedbackDepartmentIssues === "Yes"}
            onChange={() => handlefeedbackDepartmentCheckboxChange("Yes")}
          />
          <Checkbox
            color="blue"
            label="No"
            value="No"
            onClick={() => setValue("0")}
            {...register("TypesOfIFeedbackDepartmentIssuesssus")}
            checked={feedbackDepartmentIssues === "No"}
            onChange={() => handlefeedbackDepartmentCheckboxChange("No")}
          />
        </div>

        <div className="flex flex-col mb-5 ">
          <label htmlFor="" className="text-black font-semibold mb-2">
            <span className="text-3xl text-blue-400">*</span> Please indicate
            the thematic area
          </label>

          <Checkbox
            color="blue"
            label="    Disaster risk reduction (DRR)"
            value="    Disaster risk reduction (DRR)"
            onClick={() => setValue("0")}
            {...register("Thermetic_Area")}
            checked={thermeticArea === "    Disaster risk reduction (DRR)"}
            onChange={() =>
              handleThermeticAreaCheckboxChange(
                "    Disaster risk reduction (DRR)"
              )
            }
          />
          <Checkbox
            color="blue"
            label="Shelter"
            value="Shelter"
            onClick={() => setValue("0")}
            {...register("Thermetic_Area")}
            checked={thermeticArea === "Shelter"}
            onChange={() => handleThermeticAreaCheckboxChange("Shelter")}
          />
          <Checkbox
            color="blue"
            label="Livelihood"
            value="Livelihood"
            onClick={() => setValue("0")}
            {...register("Thermetic_Area")}
            checked={thermeticArea === "Livelihood"}
            onChange={() => handleThermeticAreaCheckboxChange("Livelihood")}
          />
          <Checkbox
            color="blue"
            label="Health"
            value="Health"
            onClick={() => setValue("0")}
            {...register("Thermetic_Area")}
            checked={thermeticArea === "Health"}
            onChange={() => handleThermeticAreaCheckboxChange("Health")}
          />
          <Checkbox
            color="blue"
            label="  Mental health and PSS"
            value="  Mental health and PSS"
            onClick={() => setValue("0")}
            {...register("Thermetic_Area")}
            checked={thermeticArea === "  Mental health and PSS"}
            onChange={() =>
              handleThermeticAreaCheckboxChange("  Mental health and PSS")
            }
          />
          <Checkbox
            color="blue"
            label="Immunization service"
            value="Immunization service"
            onClick={() => setValue("0")}
            {...register("Thermetic_Area")}
            checked={thermeticArea === "Immunization service"}
            onChange={() =>
              handleThermeticAreaCheckboxChange("Immunization service")
            }
          />
          <Checkbox
            color="blue"
            label="Wash"
            value="Wash"
            onClick={() => setValue("0")}
            {...register("Thermetic_Area")}
            checked={thermeticArea === "Wash"}
            onChange={() => handleThermeticAreaCheckboxChange("Wash")}
          />
          <Checkbox
            color="blue"
            label="Migration and displacement"
            value="Migration and displacement"
            onClick={() => setValue("0")}
            {...register("Thermetic_Area")}
            checked={thermeticArea === "Migration and displacement"}
            onChange={() =>
              handleThermeticAreaCheckboxChange("Migration and displacement")
            }
          />
          <Checkbox
            color="blue"
            label="Climate risk"
            value="Climate risk"
            onClick={() => setValue("0")}
            {...register("Thermetic_Area")}
            checked={thermeticArea === "Climate risk"}
            onChange={() => handleThermeticAreaCheckboxChange("Climate risk")}
          />
          <Checkbox
            color="blue"
            label="Heatwave risk reduction, preparedness or response"
            value="Heatwave risk reduction, preparedness or response"
            onClick={() => setValue("0")}
            {...register("Thermetic_Area")}
            checked={
              thermeticArea ===
              "Heatwave risk reduction, preparedness or response"
            }
            onChange={() =>
              handleThermeticAreaCheckboxChange(
                "Heatwave risk reduction, preparedness or response"
              )
            }
          />
          <Checkbox
            color="blue"
            label=" Cash transfer"
            value=" Cash transfer"
            onClick={() => setValue("0")}
            {...register("Thermetic_Area")}
            checked={thermeticArea === " Cash transfer"}
            onChange={() => handleThermeticAreaCheckboxChange(" Cash transfer")}
          />
          <Checkbox
            color="blue"
            label="Protection, Gender and inclusion"
            value="Protection, Gender and inclusion"
            onClick={() => setValue("0")}
            {...register("Thermetic_Area")}
            checked={thermeticArea === "Protection, Gender and inclusion"}
            onChange={() =>
              handleThermeticAreaCheckboxChange(
                "Protection, Gender and inclusion"
              )
            }
          />
          <Checkbox
            color="blue"
            label=" Not related to above thematic area"
            value=" Not related to above thematic area"
            onClick={() => setValue("0")}
            {...register("Thermetic_Area")}
            checked={thermeticArea === " Not related to above thematic area"}
            onChange={() =>
              handleThermeticAreaCheckboxChange(
                " Not related to above thematic area"
              )
            }
          />
        </div>

        <div className="flex flex-col mb-5 ">
          <label htmlFor="" className="text-black font-semibold mb-2">
            <span className="text-3xl text-blue-400">*</span> Category of
            Complaint/Feedback
          </label>
          <Checkbox
            color="blue"
            label="Distribution process"
            value="Distribution process"
            onClick={() => setValue("0")}
            {...register("CategoryOf_Complain")}
            checked={categoryofComplain === "Distribution process"}
            onChange={() =>
              handleCategoryOfComplainCheckboxChange("Distribution process")
            }
          />
          <Checkbox
            color="blue"
            label="Misbehave, fraud and corruption by community members"
            value="Misbehave, fraud and corruption by community members"
            onClick={() => setValue("0")}
            {...register("CategoryOf_Complain")}
            checked={
              categoryofComplain ===
              "Misbehave, fraud and corruption by community members"
            }
            onChange={() =>
              handleCategoryOfComplainCheckboxChange(
                "Misbehave, fraud and corruption by community members"
              )
            }
          />
          <Checkbox
            color="blue"
            label="Positive feedback about RC"
            value="Positive feedback about RC"
            onClick={() => setValue("0")}
            {...register("CategoryOf_Complain")}
            checked={categoryofComplain === "Positive feedback about RC"}
            onChange={() =>
              handleCategoryOfComplainCheckboxChange(
                "Positive feedback about RC"
              )
            }
          />
          <Checkbox
            color="blue"
            label="Protection issue (Community to community)"
            value="Protection issue (Community to community)"
            onClick={() => setValue("0")}
            {...register("CategoryOf_Complain")}
            checked={
              categoryofComplain === "Protection issue (Community to community)"
            }
            onChange={() =>
              handleCategoryOfComplainCheckboxChange(
                "Protection issue (Community to community)"
              )
            }
          />
          <Checkbox
            color="blue"
            label="PSEA concern (Staff/vendor/volunteer with the community)"
            value="PSEA concern (Staff/vendor/volunteer with the community)"
            onClick={() => setValue("0")}
            {...register("CategoryOf_Complain")}
            checked={
              categoryofComplain ===
              "PSEA concern (Staff/vendor/volunteer with the community)"
            }
            onChange={() =>
              handleCategoryOfComplainCheckboxChange(
                "PSEA concern (Staff/vendor/volunteer with the community)"
              )
            }
          />
          <Checkbox
            color="blue"
            label="Selection process: Area/ beneficiary"
            value="Selection process: Area/ beneficiary"
            onClick={() => setValue("0")}
            {...register("CategoryOf_Complain")}
            checked={
              categoryofComplain === "Selection process: Area/ beneficiary"
            }
            onChange={() =>
              handleCategoryOfComplainCheckboxChange(
                "Selection process: Area/ beneficiary"
              )
            }
          />
          <Checkbox
            color="blue"
            label="Suggestion to improve RC Program"
            value="Suggestion to improve RC Program"
            onClick={() => setValue("0")}
            {...register("CategoryOf_Complain")}
            checked={categoryofComplain === "Suggestion to improve RC Program"}
            onChange={() =>
              handleCategoryOfComplainCheckboxChange(
                "Suggestion to improve RC Program"
              )
            }
          />
          <Checkbox
            color="blue"
            label="Others"
            value="Others"
            onClick={() => setValue("0")}
            {...register("CategoryOf_Complain")}
            checked={categoryofComplain === "Others"}
            onChange={() => handleCategoryOfComplainCheckboxChange("Others")}
          />
        </div>
        <div className="flex flex-col  mb-5">
          <label htmlFor="" className="text-black font-semibold mb-2">
            <span className="text-3xl text-blue-400">*</span>Instant
            response/support provided by feedback receiver
          </label>
          <input
            className=" peer w-3/4 h-full  font-sans  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
            {...register("Instant_Response")}
          />
        </div>
        <div className="flex flex-col mb-5 ">
          <label htmlFor="" className="text-black font-semibold mb-2">
            <span className="text-3xl text-blue-400">*</span>Status of the
            feedback
            <p className="text-sm font-light">
              1. Closed= if the feedback provider is fully served/satisfied with
              the response/ no need any further communication. 2. Open= It need
              further communication for response and given time for further
              response 3. Referred: if the feedback provider is linked with
              others for his service and he/she will communicate individually
              with the person/ institution we referred. (please check the
              address/ number either it is available or not before referring.)
            </p>
          </label>

          <Checkbox
            color="blue"
            label="Open"
            value="Open"
            onClick={() => setValue("0")}
            {...register("StatusOf_feedback")}
            checked={statusOfFeedback === "Open"}
            onChange={() => handleStatusOfFeedbackCheckboxChange("Open")}
          />
          <Checkbox
            color="blue"
            label="Closed"
            value="Closed"
            onClick={() => setValue("0")}
            {...register("StatusOf_feedback")}
            checked={statusOfFeedback === "Closed"}
            onChange={() => handleStatusOfFeedbackCheckboxChange("Closed")}
          />
          <Checkbox
            color="blue"
            label="Reffered"
            value="Reffered"
            onClick={() => setValue("0")}
            {...register("StatusOf_feedback")}
            checked={statusOfFeedback === "Reffered"}
            onChange={() => handleStatusOfFeedbackCheckboxChange("Reffered")}
          />
        </div>

        <div className="flex flex-col mb-5 ">
          <label htmlFor="" className="text-black font-semibold mb-2">
            Do you have any disability?
          </label>
          <Checkbox
            color="blue"
            label="Yes"
            value="Yes"
            onClick={() => setValue("0")}
            {...register("disability")}
            checked={disability === "Yes"}
            onChange={() => handleDisabilityCheckboxChange("Yes")}
          />
          <Checkbox
            color="blue"
            label="No"
            value="No"
            onClick={() => setValue("0")}
            {...register("disability")}
            checked={disability === "No"}
            onChange={() => handleDisabilityCheckboxChange("No")}
          />

          
        </div>
        <div className="flex flex-col mb-5 ">
          <label htmlFor="" className="text-black font-semibold mb-2">
            What kind of disabilities?
            <p className="text-sm font-light">
              (Take consent before asking the question)
            </p>
          </label>
          <Checkbox
            color="blue"
            label="Seeing"
            value="Seeing"
            onClick={() => setValue("0")}
            {...register("KindOf_disability")}
            checked={kinddisability === "Seeing"}
            onChange={() => handleKindDisabilityCheckboxChange("Seeing")}
          />
          <Checkbox
            color="blue"
            label="Hearing"
            value="Hearing"
            onClick={() => setValue("0")}
            {...register("KindOf_disability")}
            checked={kinddisability === "Hearing"}
            onChange={() => handleKindDisabilityCheckboxChange("Hearing")}
          />
          <Checkbox
            color="blue"
            label="Walking"
            value="Walking"
            onClick={() => setValue("0")}
            {...register("KindOf_disability")}
            checked={kinddisability === "Walking"}
            onChange={() => handleKindDisabilityCheckboxChange("Walking")}
          />
          <Checkbox
            color="blue"
            label="Cognition"
            value="Cognition"
            onClick={() => setValue("0")}
            {...register("KindOf_disability")}
            checked={kinddisability === "Cognition"}
            onChange={() => handleKindDisabilityCheckboxChange("Cognition")}
          />
          <Checkbox
            color="blue"
            label="Self-care"
            value="Self-care"
            onClick={() => setValue("0")}
            {...register("KindOf_disability")}
            checked={kinddisability === "Self-care"}
            onChange={() => handleKindDisabilityCheckboxChange("Self-care")}
          />
          <Checkbox
            color="blue"
            label="Communication"
            value="Communication"
            onClick={() => setValue("0")}
            {...register("KindOf_disability")}
            checked={kinddisability === "Communication"}
            onChange={() => handleKindDisabilityCheckboxChange("Communication")}
          />

        </div>

        <div className="flex flex-col  mb-5">
          <label htmlFor="" className="text-black font-semibold mb-2">
            Remark
            <p className="text-sm font-light">
              Feedback collector: (Support needed for further improvement)
            </p>
          </label>
          <input
            className=" peer w-3/4 h-full  font-sans  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  border-t-transparent  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
            {...register("Remark")}
          />
        </div>

        <div className="flex gap-4 justify-center mt-20">
          {/* <button type="submit">Submit</button> */}
          <Button
            size="lg"
            className="flex gap-1 items-center"
            variant="outlined"
            
          >
            <CiEdit className="text-3xl" /> Save as Draft
          </Button> 

           <Button type="submit" size="lg" variant="" color="blue">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DForm;
