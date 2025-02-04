import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Textarea,
  Form,
  Input,
  Button,
} from "@heroui/react";

interface ContactModalProps {
  openModal: boolean;
  onClose: () => void;
}

export default function ContactModal({
  openModal,
  onClose,
}: ContactModalProps) {
  return (
    <Modal className="font-fixedsys" isOpen={openModal} onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <div className="animate-typewriter ease-in-out overflow-hidden whitespace-nowrap border-r-2 border-slate-300 inline-block max-h-fit max-w-fit">
            Contact Me ;)
          </div>
        </ModalHeader>
        <ModalBody>
          <Form validationBehavior="native">
            <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email: yourname@yourdomain.com"
              type="email"
            />
            <Input
              classNames={{
                mainWrapper: "mt-6",
              }}
              errorMessage="Please enter a valid phone number"
              label="Phone Number (optional)"
              labelPlacement="outside"
              name="phoneNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Enter your phone number: 123-456-7890"
              type="tel"
            />
            <Textarea
              isRequired
              classNames={{
                base: "mt-6",
              }}
              errorMessage="Please enter a message"
              label="Your Message :)"
              labelPlacement="outside"
              name="message"
              placeholder="Enter your message here!"
              type="text"
            />
            <Button className="mt-6 mb-2" type="submit" variant="bordered">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
