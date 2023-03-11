import React from "react";

type Breadcrumb = {
    title: string;
    href: string;
}

type PageProps = {
    pageTitle: string;
    breadCrumbs: Breadcrumb[];
    children?: React.ReactNode;
}

const PageContentWrapper: React.FunctionComponent<PageProps> = ({ children, ...props }): any => {

    const { breadCrumbs, pageTitle } = props;

    return (
        <>
            <h4 className="mb-sm-0">{pageTitle}</h4>
            {breadCrumbs.length > 0 && (
                <div>
                    <ol>
                        {breadCrumbs.map((breadCrumb: any, breadCrumbIndex: number) => (
                            <>
                                <li className={`breadcrumb-item ${(breadCrumbIndex + 1) === breadCrumbs.length ? 'active':''}`}>
                                    {(breadCrumbIndex + 1) === breadCrumbs.length ? (
                                        breadCrumb.title
                                    ) : (
                                        <a href={`${(breadCrumbIndex + 1) === breadCrumbs.length ? '#.' : breadCrumb.href}`}>
                                            {breadCrumb.title}
                                        </a>
                                    )}
                                </li>
                            </>
                        ))}
                    </ol>
                </div>
            )}
        </>
    );
};

export default PageContentWrapper;