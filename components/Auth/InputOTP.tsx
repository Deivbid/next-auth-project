import {
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  InputOTP,
} from "../ui/input-otp";

interface InputOneTimePasswordProps {
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export const InputOneTimePassword = ({
  buttonRef,
}: InputOneTimePasswordProps) => {
  return (
    <InputOTP maxLength={6} onComplete={() => buttonRef?.current?.focus()}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};
