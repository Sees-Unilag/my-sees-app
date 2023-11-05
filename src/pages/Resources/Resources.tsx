import React from 'react'
import styles from './Resources.module.css'
import Resource from '../../components/lib/Resource/Resource'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAllResource } from '../../api/resources'
import { Loader } from '../../components'
import NoResouces from '../../components/lib/Resource/NoResouces'
import { Resource as resource } from '../../types'

const Resources = () => {
  const params = useParams();
  console.log(params.id)
  const { isLoading, data, error } = useQuery([
    "resouces",
    {
      Id:params.id
    }
  ],getAllResource,{
    retry: 0
  })
  console.log(error)
  console.log(data)
  const resources = data ? data.data : []
  const documents: Array<resource> = resources.documents || []
  const resourcesComponents = documents.map((resource, id: number) => {
    return <Resource name={resource.name} link={resource.link} id={resource.id} createdAt={resource.createdAt} courseId={resource.courseId} verified={resource.verified} key={id} />
  })
  if(isLoading) return <Loader/>
  return (
    <>
      <section className={`${styles.container}`}>
      <h2 className={`${styles.header}`}>List of Resources</h2>
      <div className={`${styles.ResourcesContainer}`}>
        {
          documents.length === 0 ? <NoResouces courseCode={resources.courseCode} /> : resourcesComponents
        }
      </div>
      </section>
    </>
  )
}

export default Resources