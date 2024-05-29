import { AppThemeProps } from '@/app/page'
import { Tools } from './Tools'

export const ToolsSection = ({ isDarkMode }: AppThemeProps) => {
  return (
    <section
      id="tools"
      className={`${isDarkMode ? 'bg-textLight-800' : 'bg-darkBackground-500'}`}
    >
      <div className="mx-auto w-4/5 py-3">
        <Tools isDarkMode={isDarkMode} />
      </div>
    </section>
  )
}
