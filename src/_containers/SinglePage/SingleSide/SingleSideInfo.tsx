import { FC, useCallback, ReactNode } from "react";
import { IProduct } from "../../../models";
import { format } from "date-fns";

const Item: FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
    <div className="info-workshop__item">
        <div className="info-workshop__label">{title}</div>
        <div className="info-workshop__value">{children}</div>
    </div>
);

const SingleSideInfo: FC<{ item: IProduct }> = ({ item }) => {
    const { lastUpdate, created, browsers, stack, category, version } = item;

    const renderItems = useCallback(
        (data: string[]) => {
            return data.map((item, i) => <span key={item + i}>{item}</span>);
        },
        [browsers, stack]
    );

    const update = useCallback(
        (update?: Date) => {
            return format(update ? lastUpdate : created, "dd MMMM yyyy");
        },
        [lastUpdate, created]
    );

    return (
        <section className="aside-single__info info-workshop">
            <Item title="Last Update">{update(lastUpdate)}</Item>

            <Item title="Created">{update()}</Item>

            {browsers.length > 0 && <Item title="Compatible Browsers">{renderItems(browsers)}</Item>}

            {stack.length > 0 && <Item title="Stack">{renderItems(stack)}</Item>}

            <Item title="Category">{category}</Item>

            <Item title="Current Version">{version}</Item>
        </section>
    );
};

export default SingleSideInfo;
