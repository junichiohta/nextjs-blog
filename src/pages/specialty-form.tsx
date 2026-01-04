import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

const schema = z.object({
  postalCode: z
    .string()
    .min(1, { message: "必須項目です" })
    .regex(/^\d{7}$/, { message: "郵便番号は7桁の数字で指定してください" }),
  localSpecialty: z.string().min(1, { message: "必須項目です" }),
});

type Schema = z.infer<typeof schema>;

const SpecialtyForm: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data: Schema) => {
    console.log("フォーム送信データ:", data);
    alert(`送信成功！\n郵便番号: ${data.postalCode}\n特産品: ${data.localSpecialty}`);
  });

  return (
    <>
      <h1>特産品投稿フォーム</h1>
      <form onSubmit={onSubmit} style={{ marginTop: "2rem" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="postalCode" style={{ display: "block", marginBottom: "0.5rem" }}>
            郵便番号:
          </label>
          <input
            id="postalCode"
            {...register("postalCode")}
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              width: "300px",
            }}
            placeholder="例: 1234567"
          />
          {errors.postalCode?.message && (
            <p style={{ color: "red", marginTop: "0.5rem" }}>
              {errors.postalCode.message}
            </p>
          )}
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="localSpecialty" style={{ display: "block", marginBottom: "0.5rem" }}>
            特産品:
          </label>
          <input
            id="localSpecialty"
            {...register("localSpecialty")}
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              width: "300px",
            }}
            placeholder="例: りんご"
          />
          {errors.localSpecialty?.message && (
            <p style={{ color: "red", marginTop: "0.5rem" }}>
              {errors.localSpecialty.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          style={{
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          送信
        </button>
      </form>
      <div style={{ marginTop: "2rem" }}>
        <Link href="/">← トップページに戻る</Link>
      </div>
    </>
  );
};

export default SpecialtyForm;
