import TlDraw from "@/app/_components/tl-draw";
import { Room } from "./_components/room";

export default async function Home() {

  return (
    <main>
      <Room>
        <TlDraw />
      </Room>
    </main>
  );
}