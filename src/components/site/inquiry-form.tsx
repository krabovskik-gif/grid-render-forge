import { useState, type FormEvent } from "react";
import { ArrowUpRight, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InquiryForm() {
  const [fileName, setFileName] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [`Ім’я: ${data.get("name")}`, `Телефон: ${data.get("phone")}`, `Email: ${data.get("email")}`, `Тип проєкту: ${data.get("type")}`, "", "Опис завдання:", data.get("message"), fileName ? `\nФайл для додавання вручну: ${fileName}` : ""].join("\n");
    window.location.href = `mailto:profipro@ukr.net?subject=${encodeURIComponent("Запит на інженерне проєктування")}&body=${encodeURIComponent(body)}`;
  }
  return <form className="inquiry-form" onSubmit={submit}><div className="section-code">Форма / 01</div><h2 className="mt-4 text-4xl">Описати задачу</h2><div className="form-grid mt-8"><div className="field"><label htmlFor="name">Ім’я</label><Input className="form-control" id="name" name="name" required /></div><div className="field"><label htmlFor="phone">Телефон</label><Input className="form-control" id="phone" name="phone" type="tel" required /></div><div className="field"><label htmlFor="email">Email</label><Input className="form-control" id="email" name="email" type="email" required /></div><div className="field"><label htmlFor="type">Тип проєкту</label><Input className="form-control" id="type" name="type" placeholder="Напрям проєктування" /></div><div className="field field--full"><label htmlFor="message">Короткий опис завдання</label><Textarea className="form-control min-h-32" id="message" name="message" required /></div><div className="field field--full"><label htmlFor="file">Додатковий файл / креслення</label><Input className="form-control file:mr-3" id="file" name="file" type="file" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} /><p className="file-note"><Paperclip className="mr-1 inline size-3"/>Після відкриття пошти додайте вибраний файл до листа вручну.</p></div><div className="field--full mt-2"><Button type="submit" size="lg" variant="technical">Надіслати запит <ArrowUpRight /></Button></div></div></form>;
}
