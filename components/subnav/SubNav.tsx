import type { ValidSubcategory } from '../../util/parsed';
import clear_label from "../../util/clear_label"

import Subcategory from '../nav/SubCategory';
import PageLink from '../nav/PageLink';


type SubNavbarProps = {
    activeTab: string;
    activeSub: string;
    subcategory: { [key: string]: ValidSubcategory };
}

const SubNavbar = ({ activeSub, activeTab, subcategory }: SubNavbarProps) => {
    return <div className="flex flex-col overflow-y-auto text-white bg-primary subnav">
        {
            Object.values(subcategory)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((subcategory) => {
                const key = `${activeTab}-${subcategory.name}`;

                if (
                    subcategory.item.startsWith("category") &&
                    "subcategories" in subcategory
                ) {
                    const content = Object.values(
                        subcategory.subcategories
                    )
                        .sort((a, b) =>
                            a.name.localeCompare(b.name)
                        )
                        .map((item) => {
                            const label = item.name;

                            return {
                                label: label,
                                key: `${key}-${item.name}`,
                                link: `/${activeTab}/${subcategory.name}/${item.name}`,
                            };
                        });
                    return (
                        <Subcategory
                            key={`${key}`}
                            link={`/docs/${activeTab}/${subcategory.name}`}
                            label={clear_label(subcategory.name)}
                        >
                            {content.map((item,index) => (
                                <PageLink
                                    onClick={() => { }}
                                    {...item}
                                    key={`${index}-${key}`}
                                />
                            ))}
                        </Subcategory>
                    );
                }

                const label = clear_label(subcategory.name);
                return (
                    <PageLink
                        key={key}
                        link={`${activeTab}/${subcategory.name}`}
                        label={label}
                    />
                );
            })
        }
    </div>
}

export default SubNavbar;