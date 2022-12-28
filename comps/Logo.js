
export default function Logo(props) {

    const topic = props.topic || 'Hematology';

    return (<>
        <div className="relative min-h-[135px] md:scale-100 scale-90 select-none w-[340px] rounded-xl cursor-default border z-0 border-red-500">
            <div className="flex flex-col font-bold text-left gap-0 leading-10 p-6 text-5xl ">
                <span>DDx</span>
                <span className="uppercase text-red-500">Casebook</span>
            </div>
        <span className="absolute uppercase bg-white font-bold p-1 select-none text-red-500 bottom-[-14px] left-[30px] z-10">{topic}</span>
        </div>
    </>)
}