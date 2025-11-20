import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { FileUpload } from "../../../Shared/FileUpload";
import { TextInput } from "../../../Components/Shared/FormElements/TextInput";
import { EmailInput } from "../../../Components/Shared/FormElements/EmailInput";
import { PhoneInput } from "../../../Components/Shared/FormElements/PhoneInput";
import { Button } from "../../../Shared/Button";
import {
  AppMainLayoutCover,
  AppTableDataInformation,
  AppOnlineAdmissionForm,
  AppFormApplication,
} from "../style";

export const AdmissionPage = () => {
  const handleUploadedFiles = (files) => {
    console.log("Uploaded to parent:", files);
    // You can send them to a backend, preview, etc.
  };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(signupSchema),
    // defaultValues: {
    //   phone: { countryCode: "+91", number: "" },
    //   policy: true,
    // },
  });

  const onSubmit = (data) => {
    console.log("Forgot Password Email:", data);
    // addToast({
    //   type: "success",
    //   title: MESSAGES.success.title,
    //   description: MESSAGES.success.description,
    // });

    // navigate(paths.LOGIN);
  };

  return (
    <AppMainLayoutCover>
      <AppTableDataInformation>
        <AppOnlineAdmissionForm>
          <h3>Online Admission Form</h3>
          <AppFormApplication onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="app_form_online_wrap">
              <div className="app_form_heading">
                <p>Upload Profile</p>
              </div>
              <div className="app_form_online_content">
                <FileUpload multiple={false} onUpload={handleUploadedFiles} />
              </div>
            </div>
            <div className="app_form_online_wrap">
              <div className="app_form_heading">
                <p>Candidate Details</p>
              </div>
              <div className="app_form_online_content">
                <div className="full_row">
                  <TextInput
                    name="full_name"
                    label="Full Name"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                </div>
                <div className="half_row">
                  <TextInput
                    name="father_name"
                    label="Father Name"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                  <TextInput
                    name="mother_name"
                    label="Mother Name"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                </div>
                <div className="half_row">
                  <EmailInput
                    name="email"
                    label="Email Address"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                  <PhoneInput
                    name="phone"
                    label="Phone Number"
                    register={register}
                    errors={errors}
                    placeholder="Phone"
                    control={control}
                    setValue={setValue}
                  />
                </div>
                <div className="half_row">
                  <div className="inside">
                    <p>Gender</p>
                    <select>
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="inside">
                    <p>Marital Status</p>
                    <select>
                      <option>Select</option>
                      <option>Married</option>
                      <option>Unmarried</option>
                    </select>
                  </div>
                </div>
                <div className="half_row">
                  <TextInput
                    name="aadhar_no"
                    label="Aadhar No."
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                  <TextInput
                    name="whatsapp"
                    label="WhatsApp"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                </div>
                <div className="half_row">
                  <div className="inside">
                    <p>Category</p>
                    <select>
                      <option>Select</option>
                      <option>General</option>
                      <option>OBC</option>
                    </select>
                  </div>
                  <TextInput
                    name="nationality"
                    label="Nationality"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                  <TextInput
                    name="religion"
                    label="Religion"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                </div>
                <div className="half_row">
                  <TextInput
                    name="city"
                    label="City"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                  <TextInput
                    name="state"
                    label="State"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                  <TextInput
                    name="pin"
                    label="Pin Code"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                  <TextInput
                    name="country"
                    label="Country"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            <div className="app_form_online_wrap">
              <div className="app_form_heading">
                <p>Course / Programe Details</p>
              </div>
              <div className="app_form_online_content">
                <div className="half_row">
                  <TextInput
                    name="course_name"
                    label="Course Name"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                  <TextInput
                    name="stream"
                    label="Stream"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                  <TextInput
                    name="semester"
                    label="Semester / Year"
                    register={register}
                    errors={errors}
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            <div className="app_form_online_wrap">
              <div className="app_form_heading">
                <p>ID and Address proof</p>
              </div>
              <div className="app_form_online_content">
                <div className="all_form_field">
                  <p>Photo ID:</p>
                  <div className="app_form_grup">
                    <select>
                      <option>Choose option</option>
                      <option>Aadhar Card</option>
                      <option>Pan Card</option>
                      <option>Votar Card</option>
                    </select>
                    <FileUpload
                      multiple={false}
                      onUpload={handleUploadedFiles}
                    />
                  </div>
                </div>
                <div className="all_form_field">
                  <p>Address Proof:</p>
                  <div className="app_form_grup">
                    <select>
                      <option>Choose option</option>
                      <option>Aadhar Card</option>
                      <option>Electricity Bill</option>
                      <option>Others</option>
                    </select>
                    <FileUpload
                      multiple={false}
                      onUpload={handleUploadedFiles}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="app_form_online_wrap">
              <div className="app_form_heading">
                <p>Academic Information</p>
              </div>
              <div className="app_form_online_content"></div>
            </div> */}

            <div className="app_btn_form">
              <Button>Submit</Button>
            </div>
          </AppFormApplication>
        </AppOnlineAdmissionForm>
      </AppTableDataInformation>
    </AppMainLayoutCover>
  );
};
